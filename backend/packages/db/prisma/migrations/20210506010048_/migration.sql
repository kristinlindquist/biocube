/*
  Warnings:

  - Made the column `measureId` on table `MeasureRecipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MeasureRecipe" ALTER COLUMN "measureId" SET NOT NULL;
