import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("portfolio_admin_session");
  return NextResponse.json({ success: true });
}
