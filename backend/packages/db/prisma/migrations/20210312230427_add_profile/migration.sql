/*
  Warnings:

  - You are about to drop the column `validity` on the `Measure` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "validity";

-- DropEnum
DROP TYPE "Validity";
