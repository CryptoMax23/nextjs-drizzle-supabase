"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
export default function SignOut() {
  const router = useRouter();
  const supabase = createSupabaseBrowerClient();

  const logout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <Button className="w-20" onClick={logout}>
      Sign Out
    </Button>
  );
}
