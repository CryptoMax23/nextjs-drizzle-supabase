import { NextResponse } from "next/server";
import { insertTransaction } from "@/lib/db/queries";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Extract `transactionSignature` and `publicKey` from the request body
    const { transactionSignature, publicKey } = body;

    // Ensure that transactionSignature and publicKey are provided
    if (!transactionSignature || !publicKey) {
      return new Response("Missing required parameters", { status: 400 });
    }

    // Insert the transaction and get the response
    const transaction = await insertTransaction({
      id: transactionSignature,
      user: publicKey,
    });

    // Return the inserted transaction as JSON
    return NextResponse.json(transaction);
  } catch (error) {
    // Check if error is an instance of Error and has a message
    if (error instanceof Error && error.message) {
      return new Response(error.message, { status: 500 });
    }

    // Handle non-Error types or Errors without a message
    return new Response("Internal server error", { status: 500 });
  }
}
