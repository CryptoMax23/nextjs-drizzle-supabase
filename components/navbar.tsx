import WalletMultiButton from "./wallet-multi-button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import SolanaLogo from "../public/solanaLogo.svg";

import SignIn from "@/app/oauth/components/signin";
import SignOut from "@/app/oauth/components/signout";
import Login from "@/app/oauth/components/login";
import { getAllTransactions, insertUser } from "@/lib/db/queries";

import { createSupabaseServerClient } from "@/lib/supabase/server";
export async function NavBar() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  if (user) {
    console.log(user);

    const newUser = {
      id: user.id,
      email: user.email ?? null,
      fullName: user.user_metadata?.full_name ?? null,
      userName: user.user_metadata?.user_name ?? null,
      createdAt: user.created_at ?? null,
      updatedAt: user.updated_at ?? null,
    };

    try {
      const insertedUser = await insertUser(newUser);
      console.log("User inserted:", insertedUser);
    } catch (error) {
      console.error("Error inserting user:", error);
    }
  } else {
    console.log("No user data available to insert.");
  }
  return (
    <Navbar>
      <NavbarBrand>
        <Image src={SolanaLogo} alt="Solana Logo" width={100} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <Tooltip placeholder="bottom" content="Devnet Only">
          <NavbarItem>
            <WalletMultiButton />
          </NavbarItem>
        </Tooltip>
        <NavbarItem>
          <div className="rounded-full bg-white overflow-hidden">
            <Image
              className={user ? "" : "scale-125"} // Apply scale only for "github.png"
              width={40}
              height={40}
              src={user?.user_metadata?.avatar_url || "/github.png"}
              quality={100}
              alt=""
            />
          </div>
        </NavbarItem>
        <NavbarItem>
          {user ? <SignOut /> : <SignIn />}
          {/* <Login /> */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
