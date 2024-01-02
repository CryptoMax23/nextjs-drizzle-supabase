import { NextResponse } from "next/server";
import { getAllTransactions } from "@/lib/db/queries";

export async function GET(request: Request) {
  const transactions = await getAllTransactions();

  return NextResponse.json(transactions);
}
