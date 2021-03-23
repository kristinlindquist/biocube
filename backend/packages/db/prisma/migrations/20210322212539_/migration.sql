/*
  Warnings:

  - Added the required column `dataTypeId` to the `Stream` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "dataTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "DataType" (
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "parentId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DataType" ADD FOREIGN KEY ("parentId") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stream" ADD FOREIGN KEY ("dataTypeId") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
