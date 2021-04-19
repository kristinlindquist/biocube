/*
  Warnings:

  - Changed the type of `operator` on the `Filter` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Filter" DROP COLUMN "operator",
ADD COLUMN     "operator" TEXT NOT NULL;

-- DropEnum
DROP TYPE "OperatorType";
