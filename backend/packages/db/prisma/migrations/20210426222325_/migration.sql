-- CreateEnum
CREATE TYPE "ChartType" AS ENUM ('AREA', 'BAR', 'LINE', 'PIE', 'TABLE');

-- AlterTable
ALTER TABLE "Measure" ADD COLUMN     "defaultChartType" "ChartType";
