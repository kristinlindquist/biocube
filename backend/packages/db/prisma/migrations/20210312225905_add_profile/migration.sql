/*
  Warnings:

  - You are about to drop the column `indicationId` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the `MeasureCois` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AspectOfHealthToIndication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MeasureCois" DROP CONSTRAINT "MeasureCois_conceptOfInterestId_fkey";

-- DropForeignKey
ALTER TABLE "MeasureCois" DROP CONSTRAINT "MeasureCois_measureId_fkey";

-- DropForeignKey
ALTER TABLE "_AspectOfHealthToIndication" DROP CONSTRAINT "_AspectOfHealthToIndication_A_fkey";

-- DropForeignKey
ALTER TABLE "_AspectOfHealthToIndication" DROP CONSTRAINT "_AspectOfHealthToIndication_B_fkey";

-- DropForeignKey
ALTER TABLE "Measure" DROP CONSTRAINT "Measure_indicationId_fkey";

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "indicationId";

-- AlterTable
ALTER TABLE "Study" ALTER COLUMN "abstract" DROP NOT NULL;

-- DropTable
DROP TABLE "MeasureCois";

-- DropTable
DROP TABLE "_AspectOfHealthToIndication";

-- CreateTable
CREATE TABLE "measureCois" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "conceptOfInterestId" INTEGER,
    "measureId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "measureCois" ADD FOREIGN KEY ("conceptOfInterestId") REFERENCES "ConceptOfInterest"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "measureCois" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE SET NULL ON UPDATE CASCADE;
