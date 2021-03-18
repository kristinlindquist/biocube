/*
  Warnings:

  - You are about to drop the `Mutation` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "QueryDocumentType" ADD VALUE 'UpsertMeasureDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'DeleteMeasureDocument';

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_deleteId_fkey";

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_upsertId_fkey";

-- DropTable
DROP TABLE "Mutation";

-- DropEnum
DROP TYPE "MutationDocumentType";

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("deleteId") REFERENCES "Query"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("upsertId") REFERENCES "Query"("id") ON DELETE SET NULL ON UPDATE CASCADE;
