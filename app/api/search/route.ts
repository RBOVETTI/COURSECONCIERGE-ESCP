import { NextRequest, NextResponse } from "next/server";
import { searchLecturesFromContent } from "@/lib/search/searchLectures";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const limitParam = request.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Number(limitParam) : 20;

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const safeLimit = Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 50) : 20;
  const results = searchLecturesFromContent(query, safeLimit);
  return NextResponse.json({ results });
}
