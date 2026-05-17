-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('admin', 'user');

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('active', 'banned');

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "role" "user_role" NOT NULL,
    "first_name" VARCHAR NOT NULL,
    "last_name" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "hash" VARCHAR,
    "status" "user_status" NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
