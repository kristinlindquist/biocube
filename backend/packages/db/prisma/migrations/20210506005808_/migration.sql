/*
  Warnings:

  - You are about to drop the column `recipeId` on the `Measure` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[measureId]` on the table `MeasureRecipe` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_recipeId_fkey";

-- DropIndex
DROP INDEX "Measure_recipeId_unique";

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "recipeId";

-- CreateIndex
CREATE UNIQUE INDEX "MeasureRecipe_measureId_unique" ON "MeasureRecipe"("measureId");

-- AddForeignKey
ALTER TABLE "MeasureRecipe" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
