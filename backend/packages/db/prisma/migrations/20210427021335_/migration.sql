/*
  Warnings:

  - You are about to drop the column `defaultChartType` on the `Measure` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "defaultChartType",
ADD COLUMN     "chartType" "ChartType",
ADD COLUMN     "meta" JSONB;
