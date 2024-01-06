ALTER TABLE "users" RENAME COLUMN "github" TO "email";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "full_name" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "user_name" varchar(256);--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "created_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp with time zone;