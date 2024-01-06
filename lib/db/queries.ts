import { db } from "./index";
import { DBTransaction, Users, users, transactions } from "./schema";

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

export async function insertUser(newUser: Users): Promise<Users[]> {
  const insertedUser = await db
    .insert(users)
    .values(newUser)
    .onConflictDoUpdate({
      target: users.id,
      set: {
        email: newUser.email,
        fullName: newUser.fullName,
        userName: newUser.userName,
        updatedAt: newUser.updatedAt
      }
    })
    .returning();

  return insertedUser;
}