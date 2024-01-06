import { NextResponse } from "next/server";
import { insertUser } from "@/lib/db/queries"; // Update to use insertUser

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Extract user details from the request body
    const { id, email, fullName, userName, createdAt, updatedAt } = body;

    // Insert the user and get the response
    const user = await insertUser({
      id,
      email,
      fullName,
      userName,
      createdAt,
      updatedAt,
    });

    // Return the inserted user as JSON
    return NextResponse.json(user);
  } catch (error) {
    // Check if error is an instance of Error and has a message
    if (error instanceof Error && error.message) {
      return new Response(error.message, { status: 500 });
    }

    // Handle non-Error types or Errors without a message
    return new Response("Internal server error", { status: 500 });
  }
}
