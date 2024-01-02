import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, numeric } from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
  id: text("transaction_signature").primaryKey(),
  user: text("user"),
});

export type DBTransaction = InferSelectModel<typeof transactions>;
