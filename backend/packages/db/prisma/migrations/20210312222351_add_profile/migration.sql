/*
  Warnings:

  - You are about to drop the column `indicationId` on the `Measure` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_indicationId_fkey";

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "indicationId";

-- CreateTable
CREATE TABLE "measureIndications" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "measureId" INTEGER NOT NULL,
    "indicationId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_IndicationToMeasure" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IndicationToMeasure_AB_unique" ON "_IndicationToMeasure"("A", "B");

-- CreateIndex
CREATE INDEX "_IndicationToMeasure_B_index" ON "_IndicationToMeasure"("B");

-- AddForeignKey
ALTER TABLE "measureIndications" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "measureIndications" ADD FOREIGN KEY ("indicationId") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicationToMeasure" ADD FOREIGN KEY ("A") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicationToMeasure" ADD FOREIGN KEY ("B") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;
