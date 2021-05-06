/*
  Warnings:

  - You are about to drop the column `parentId` on the `Measure` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_parentId_fkey";

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "parentId";

-- CreateTable
CREATE TABLE "_MeasureToMeasure" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MeasureToMeasure_AB_unique" ON "_MeasureToMeasure"("A", "B");

-- CreateIndex
CREATE INDEX "_MeasureToMeasure_B_index" ON "_MeasureToMeasure"("B");

-- AddForeignKey
ALTER TABLE "_MeasureToMeasure" ADD FOREIGN KEY ("A") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToMeasure" ADD FOREIGN KEY ("B") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;
