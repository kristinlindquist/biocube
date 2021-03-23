/*
  Warnings:

  - You are about to drop the column `recordedAt` on the `Datum` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Datum" DROP COLUMN "recordedAt",
ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "endedAt" TIMESTAMP(3);
