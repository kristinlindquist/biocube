-- CreateEnum
CREATE TYPE "OperatorType" AS ENUM ('CONTAINS', 'DOES_NOT_CONTAIN', 'EQUALS', 'DOES_NOT_EQUAL', 'IS_SET', 'IS_NOT_SET', 'LESS_THAN', 'GREATER_THAN');

-- AlterTable
ALTER TABLE "MeasureProcess" ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Filter" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT,
    "dimension" TEXT NOT NULL,
    "operator" "OperatorType" NOT NULL,
    "numberValues" DOUBLE PRECISION[],
    "stringValues" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FilterToMeasureProcess" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FilterToMeasureProcess_AB_unique" ON "_FilterToMeasureProcess"("A", "B");

-- CreateIndex
CREATE INDEX "_FilterToMeasureProcess_B_index" ON "_FilterToMeasureProcess"("B");

-- AddForeignKey
ALTER TABLE "_FilterToMeasureProcess" ADD FOREIGN KEY ("A") REFERENCES "Filter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FilterToMeasureProcess" ADD FOREIGN KEY ("B") REFERENCES "MeasureProcess"("id") ON DELETE CASCADE ON UPDATE CASCADE;
