/*
  Warnings:

  - You are about to drop the column `operation` on the `Measure` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "operation",
ADD COLUMN     "aggregation" TEXT;
