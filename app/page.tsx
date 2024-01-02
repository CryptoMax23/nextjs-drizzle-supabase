import CounterState from "@/components/counter-state";
import IncrementButton from "@/components/increment-button";

import TransactionsComponent from "@/components/transactions";
import { getAllTransactions } from "@/lib/db/queries";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function Home() {
  const transactions = await getAllTransactions();

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <CounterState />
      <IncrementButton />
      <TransactionsComponent transactions={transactions} />
    </div>
  );
}
