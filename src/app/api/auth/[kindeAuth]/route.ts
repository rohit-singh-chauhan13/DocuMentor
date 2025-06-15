import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<Response> {
  const endpoint = params.kindeAuth;
  const response = await handleAuth(request, endpoint);

  // Ensure the response is a valid Response object
  if (response instanceof Response) {
    return response;
  }

  // If not, wrap it in a Response object
  return new Response(JSON.stringify(response), { status: 200 });
}
