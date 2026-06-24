import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Helper to get the messages collection
async function getCollection() {
  const client = await clientPromise;
  const db = client.db("portfolio");
  return db.collection("messages");
}

// Helper to verify admin session
async function verifyAdmin() {
  const cookieStore = await cookies();
  const session = cookieStore.get("portfolio_admin_session");
  return session && session.value === "session_authenticated_alex_morgan";
}

// GET: Fetch all messages (Admin only)
export async function GET() {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const collection = await getCollection();
    const messages = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

// POST: Submit a new contact form message (Public)
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const collection = await getCollection();
    const newMessage = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      read: false,
    };

    const result = await collection.insertOne(newMessage);

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Error submitting contact message:", error);
    return NextResponse.json({ error: "Failed to submit message" }, { status: 500 });
  }
}

// PATCH: Mark a message as read/unread (Admin only)
export async function PATCH(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, read } = body;

    if (!id) {
      return NextResponse.json({ error: "Message ID is required" }, { status: 400 });
    }

    const collection = await getCollection();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { read: !!read } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating message status:", error);
    return NextResponse.json({ error: "Failed to update message" }, { status: 500 });
  }
}

// DELETE: Remove a message (Admin only)
export async function DELETE(request) {
  try {
    const isAdmin = await verifyAdmin();
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Message ID is required" }, { status: 400 });
    }

    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Message not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json({ error: "Failed to delete message" }, { status: 500 });
  }
}
