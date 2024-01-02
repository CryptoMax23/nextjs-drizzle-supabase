"use client";

import { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { program, mintPDA } from "@/anchor/setup";
import { Button } from "@nextui-org/button";
import toast, { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";

export default function IncrementButton() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onClick = async () => {
    if (!publicKey) return;

    setIsLoading(true);

    try {
      const associatedTokenAccount = getAssociatedTokenAddressSync(
        mintPDA,
        publicKey
      );

      const transaction = await program.methods
        .increment()
        .accounts({
          user: publicKey,
          tokenAccount: associatedTokenAccount,
        })
        .transaction();

      const transactionSignature = await sendTransaction(
        transaction,
        connection
      );

      // Define the data you want to send
      const transactionData = {
        transactionSignature: transactionSignature,
        publicKey: publicKey.toBase58(),
      };

      // Call the API
      fetch("/api/insertTransaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      })
        .then((response) => {
          return response.json(); // Parse the JSON data in the response
        })
        .then((data) => {
          console.log("Transaction Data:", data); // 'data' contains the actual transactions array
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      router.refresh();

      toast.success(
        <a
          href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`}
          target="_blank"
        >
          View on Solana Explorer
        </a>,
        {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        className="w-24"
        onClick={onClick}
        isLoading={isLoading}
        isDisabled={!publicKey}
      >
        {isLoading ? "" : "Increment"}
      </Button>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
