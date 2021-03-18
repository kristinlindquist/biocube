/*
  Warnings:

  - You are about to drop the `Query` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_deleteId_fkey";

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_readId_fkey";

-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_upsertId_fkey";

-- DropTable
DROP TABLE "Query";

-- CreateTable
CREATE TABLE "DataQuery" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "document" "QueryDocumentType" NOT NULL,
    "parameters" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("deleteId") REFERENCES "DataQuery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("readId") REFERENCES "DataQuery"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("upsertId") REFERENCES "DataQuery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
