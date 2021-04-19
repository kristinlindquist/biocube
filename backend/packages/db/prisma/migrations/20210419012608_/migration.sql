/*
  Warnings:

  - You are about to drop the `MeasureProcess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilterToMeasureProcess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MeasureProcess" DROP CONSTRAINT "MeasureProcess_dataTypeId_fkey";

-- DropForeignKey
ALTER TABLE "MeasureProcess" DROP CONSTRAINT "MeasureProcess_measureId_fkey";

-- DropForeignKey
ALTER TABLE "_FilterToMeasureProcess" DROP CONSTRAINT "_FilterToMeasureProcess_A_fkey";

-- DropForeignKey
ALTER TABLE "_FilterToMeasureProcess" DROP CONSTRAINT "_FilterToMeasureProcess_B_fkey";

-- DropTable
DROP TABLE "MeasureProcess";

-- DropTable
DROP TABLE "_FilterToMeasureProcess";

-- CreateTable
CREATE TABLE "MeasureComponent" (
    "id" SERIAL NOT NULL,
    "dataTypeId" INTEGER NOT NULL,
    "measureId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FilterToMeasureComponent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "measure_data_type_key" ON "MeasureComponent"("measureId", "dataTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "_FilterToMeasureComponent_AB_unique" ON "_FilterToMeasureComponent"("A", "B");

-- CreateIndex
CREATE INDEX "_FilterToMeasureComponent_B_index" ON "_FilterToMeasureComponent"("B");

-- AddForeignKey
ALTER TABLE "MeasureComponent" ADD FOREIGN KEY ("dataTypeId") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeasureComponent" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilterToMeasureComponent" ADD FOREIGN KEY ("A") REFERENCES "Filter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilterToMeasureComponent" ADD FOREIGN KEY ("B") REFERENCES "MeasureComponent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
