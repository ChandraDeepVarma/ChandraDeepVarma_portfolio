import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import clientPromise from "@/lib/mongodb";

const dataFilePath = path.join(process.cwd(), "src", "data", "portfolio.json");

// Helper to get collection
async function getCollection() {
  const client = await clientPromise;
  const db = client.db("portfolio");
  return db.collection("content");
}

export async function GET() {
  try {
    const collection = await getCollection();
    let content = await collection.findOne({ _id: "portfolio_content" });

    // Auto-seed from local JSON if database collection is empty
    if (!content) {
      console.log("MongoDB is empty, seeding from portfolio.json...");
      try {
        const fileData = await fs.readFile(dataFilePath, "utf8");
        const parsed = JSON.parse(fileData);
        // Set ID and insert
        parsed._id = "portfolio_content";
        await collection.insertOne(parsed);
        content = parsed;
      } catch (fileErr) {
        console.error("Failed to read local file for seeding:", fileErr);
        return NextResponse.json({ error: "Failed to read seed data" }, { status: 500 });
      }
    }

    // Strip internal _id from response for cleaner client state
    const { _id, ...cleanContent } = content;
    return NextResponse.json(cleanContent);
  } catch (error) {
    console.error("Error reading portfolio from MongoDB:", error);
    return NextResponse.json({ error: "Failed to read portfolio data" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // Auth Check
    const cookieStore = await cookies();
    const session = cookieStore.get("portfolio_admin_session");

    if (!session || session.value !== "session_authenticated_alex_morgan") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const newPortfolioData = await request.json();

    // Verify it is valid JSON and structure
    if (!newPortfolioData || typeof newPortfolioData !== "object") {
      return NextResponse.json({ error: "Invalid data payload" }, { status: 400 });
    }

    // Strip _id if sent from client to prevent immutable field update error in MongoDB
    delete newPortfolioData._id;

    const collection = await getCollection();
    await collection.replaceOne(
      { _id: "portfolio_content" },
      { _id: "portfolio_content", ...newPortfolioData },
      { upsert: true }
    );

    return NextResponse.json({ success: true, data: newPortfolioData });
  } catch (error) {
    console.error("Error writing portfolio data to MongoDB:", error);
    return NextResponse.json({ error: "Failed to update portfolio data" }, { status: 500 });
  }
}
