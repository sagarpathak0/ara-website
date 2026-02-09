import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    // Call the backend confirmation endpoint
    const response = await fetch(`${BACKEND_URL}/api/confirm/${token}`, {
      method: "GET",
    });

    const html = await response.text();

    // Return the HTML response from the backend
    return new NextResponse(html, {
      status: response.status,
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Error confirming email:", error);
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { background: #0a0a0a; color: #fff; font-family: 'Segoe UI', Arial, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
          .container { text-align: center; padding: 40px; }
          h1 { color: #FF4E4E; font-size: 32px; margin-bottom: 20px; }
          p { color: #888; font-size: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>❌ Connection Error</h1>
          <p>Unable to confirm your email. Please try again later.</p>
        </div>
      </body>
      </html>
      `,
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }
}
