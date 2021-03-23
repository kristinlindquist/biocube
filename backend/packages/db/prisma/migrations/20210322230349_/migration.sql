/*
  Warnings:

  - You are about to drop the column `endedAt` on the `Datum` table. All the data in the column will be lost.
  - Added the required column `startedAt` to the `Datum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Datum" DROP COLUMN "endedAt",
ADD COLUMN     "startedAt" TIMESTAMP(3) NOT NULL;
