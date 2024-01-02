"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function loginWithGithub() {
  const supabase = await createSupabaseServerClient();

  supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `http://localhost:3000/auth-server/callback`,
    },
  });
}
