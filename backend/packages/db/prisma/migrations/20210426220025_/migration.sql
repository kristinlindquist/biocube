/*
  Warnings:

  - The `aggregation` column on the `Measure` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AggregationType" AS ENUM ('AVG', 'COUNT', 'COUNT_DISTINCT', 'COUNT_DISTINCT_APPROX', 'MAX', 'MIN', 'NUMBER', 'RUNNING_TOTAL', 'VALUE', 'SUM');

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "aggregation",
ADD COLUMN     "aggregation" "AggregationType";
