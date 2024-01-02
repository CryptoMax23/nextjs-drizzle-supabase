"use client";
import { Button } from "@nextui-org/button";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import React from "react";

export default function SignIn() {
  const supabase = createSupabaseBrowerClient();

  const loginWithGithub = async () => {
    const response = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/oauth/callback`,
      },
    });

    console.log(response);
  };

  return (
    <Button className="w-full" onClick={loginWithGithub}>
      Sign In
    </Button>
  );
}
