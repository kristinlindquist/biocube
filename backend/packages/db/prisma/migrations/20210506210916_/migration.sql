/*
  Warnings:

  - Made the column `sql` on table `MeasureRecipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "MeasureRecipe" ALTER COLUMN "sql" SET NOT NULL;
