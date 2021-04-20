-- CreateEnum
CREATE TYPE "MeasureStatus" AS ENUM ('VALIDATED', 'EXPLORATORY', 'DRAFT');

-- AlterTable
ALTER TABLE "Measure" ADD COLUMN     "status" "MeasureStatus" NOT NULL DEFAULT E'DRAFT';
