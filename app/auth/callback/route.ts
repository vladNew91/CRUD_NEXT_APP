import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic"; // Ensure dynamic evaluation

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  // Safely extract the target path, decoding '%2Fdashboard' into '/dashboard'
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();

    // Exchange the code for persistent user cookies
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Build an absolute target path (e.g., http://localhost:3000/dashboard)
      const absoluteRedirectUrl = new URL(next, origin).toString();
      return NextResponse.redirect(absoluteRedirectUrl);
    }

    console.error("OAuth Exchange Fail Log:", error.message);
    return NextResponse.redirect(
      `${origin}/signin?error=${encodeURIComponent(error.message)}`,
    );
  }

  return NextResponse.redirect(`${origin}/signin?error=No+code+found`);
}
