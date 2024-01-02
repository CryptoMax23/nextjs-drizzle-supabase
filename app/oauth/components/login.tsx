import { createSupabaseServerClient } from "@/lib/supabase/server";

import SignIn from "@/app/oauth/components/signin";
import SignOut from "@/app/oauth/components/signout";

export default async function Login() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return <div>{user ? <SignOut /> : <SignIn />}</div>;
}
