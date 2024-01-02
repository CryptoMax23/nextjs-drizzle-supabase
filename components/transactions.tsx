import React from "react";
import { DBTransaction } from "@/lib/db/schema";

interface TransactionsComponentProps {
  transactions: DBTransaction[];
}

const TransactionsComponent: React.FC<TransactionsComponentProps> = ({
  transactions,
}) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {[...transactions]
          .reverse()
          .slice(0, 3)
          .map((transaction) => (
            <li key={transaction.id} className="mb-4">
              Transaction ID: {transaction.id}
              <br />
              User: {transaction.user}
              <br />
              <a
                href={`https://explorer.solana.com/tx/${transaction.id}?cluster=devnet`}
                target="_blank"
              >
                View Transaction
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TransactionsComponent;