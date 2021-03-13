/*
  Warnings:

  - You are about to drop the `_IndicationToMeasure` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IndicationToMeasure" DROP CONSTRAINT "_IndicationToMeasure_A_fkey";

-- DropForeignKey
ALTER TABLE "_IndicationToMeasure" DROP CONSTRAINT "_IndicationToMeasure_B_fkey";

-- AlterTable
ALTER TABLE "Measure" ADD COLUMN     "indicationId" INTEGER;

-- DropTable
DROP TABLE "_IndicationToMeasure";

-- AddForeignKey
ALTER TABLE "Measure" ADD FOREIGN KEY ("indicationId") REFERENCES "Indication"("id") ON DELETE SET NULL ON UPDATE CASCADE;
