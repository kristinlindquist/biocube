/*
  Warnings:

  - You are about to drop the `_MeasureToReportRecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MeasureToReportRecipe" DROP CONSTRAINT "_MeasureToReportRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_MeasureToReportRecipe" DROP CONSTRAINT "_MeasureToReportRecipe_B_fkey";

-- AlterTable
ALTER TABLE "ReportRecipe" ADD COLUMN     "measureId" INTEGER;

-- DropTable
DROP TABLE "_MeasureToReportRecipe";

-- AddForeignKey
ALTER TABLE "ReportRecipe" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
