import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const transactions = pgTable("transactions", {
  id: text("transaction_signature").primaryKey(),
  user: text("user"),
});

export const users = pgTable("users", {
  id: varchar("id", { length: 256 }).primaryKey(),
  email: varchar("email", { length: 256 }),
  fullName: varchar("full_name", { length: 256 }),
  userName: varchar("user_name", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
});

export type DBTransaction = InferSelectModel<typeof transactions>;
export type Users = InferSelectModel<typeof users>;
