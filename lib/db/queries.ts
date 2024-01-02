import { db } from "./index";
import { DBTransaction, transactions } from "./schema";

export async function getAllTransactions(): Promise<DBTransaction[]> {
  // Use the 'select' method to retrieve all records from the 'transactions' table
  const allTransactions = await db.select().from(transactions);

  return allTransactions;
}

export async function insertTransaction(
  newTransaction: DBTransaction
): Promise<DBTransaction[]> {
  const insertedTransaction = await db
    .insert(transactions)
    .values(newTransaction)
    .returning();

  return insertedTransaction;
}
