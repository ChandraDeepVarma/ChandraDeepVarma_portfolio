import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const isInline = searchParams.get("inline") === "true";

    const client = await clientPromise;
    const db = client.db("portfolio");
    const doc = await db.collection("uploads").findOne({ _id: "resume_pdf" });

    if (!doc) {
      return new NextResponse("Resume not found", { status: 404 });
    }

    // doc.data is stored as binary BSON data, so we convert it to Buffer
    const buffer = doc.data.buffer || doc.data;

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": doc.mimeType || "application/pdf",
        "Content-Disposition": isInline
          ? "inline"
          : `attachment; filename="${doc.filename || "Chandra_Deep_Varma_Resume.pdf"}"`,
      },
    });
  } catch (error) {
    console.error("Failed to serve resume PDF from MongoDB:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
