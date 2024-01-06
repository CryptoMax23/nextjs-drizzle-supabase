import { pgTable, pgEnum, text, varchar, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])


export const transactions = pgTable("transactions", {
	transactionSignature: text("transaction_signature").primaryKey().notNull(),
	user: text("user"),
});

export const users = pgTable("users", {
	id: varchar("id", { length: 256 }).primaryKey().notNull(),
	email: varchar("email", { length: 256 }),
	fullName: varchar("full_name", { length: 256 }),
	userName: varchar("user_name", { length: 256 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
});