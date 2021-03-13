/*
  Warnings:

  - You are about to drop the `CoiMaohs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ValidationStudies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `aohIndications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `measureCois` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `measureIndications` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CoiMaohs" DROP CONSTRAINT "CoiMaohs_aspectOfHealthId_fkey";

-- DropForeignKey
ALTER TABLE "CoiMaohs" DROP CONSTRAINT "CoiMaohs_conceptOfInterestId_fkey";

-- DropForeignKey
ALTER TABLE "ValidationStudies" DROP CONSTRAINT "ValidationStudies_measureId_fkey";

-- DropForeignKey
ALTER TABLE "ValidationStudies" DROP CONSTRAINT "ValidationStudies_studyId_fkey";

-- DropForeignKey
ALTER TABLE "aohIndications" DROP CONSTRAINT "aohIndications_aspectOfHealthId_fkey";

-- DropForeignKey
ALTER TABLE "aohIndications" DROP CONSTRAINT "aohIndications_indicationId_fkey";

-- DropForeignKey
ALTER TABLE "measureCois" DROP CONSTRAINT "measureCois_conceptOfInterestId_fkey";

-- DropForeignKey
ALTER TABLE "measureCois" DROP CONSTRAINT "measureCois_measureId_fkey";

-- DropForeignKey
ALTER TABLE "measureIndications" DROP CONSTRAINT "measureIndications_indicationId_fkey";

-- DropForeignKey
ALTER TABLE "measureIndications" DROP CONSTRAINT "measureIndications_measureId_fkey";

-- DropTable
DROP TABLE "CoiMaohs";

-- DropTable
DROP TABLE "ValidationStudies";

-- DropTable
DROP TABLE "aohIndications";

-- DropTable
DROP TABLE "measureCois";

-- DropTable
DROP TABLE "measureIndications";

-- CreateTable
CREATE TABLE "_AspectOfHealthToConceptOfInterest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AspectOfHealthToIndication" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ConceptOfInterestToMeasure" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MeasureToStudy" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_IndicationToMeasure" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AspectOfHealthToConceptOfInterest_AB_unique" ON "_AspectOfHealthToConceptOfInterest"("A", "B");

-- CreateIndex
CREATE INDEX "_AspectOfHealthToConceptOfInterest_B_index" ON "_AspectOfHealthToConceptOfInterest"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AspectOfHealthToIndication_AB_unique" ON "_AspectOfHealthToIndication"("A", "B");

-- CreateIndex
CREATE INDEX "_AspectOfHealthToIndication_B_index" ON "_AspectOfHealthToIndication"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConceptOfInterestToMeasure_AB_unique" ON "_ConceptOfInterestToMeasure"("A", "B");

-- CreateIndex
CREATE INDEX "_ConceptOfInterestToMeasure_B_index" ON "_ConceptOfInterestToMeasure"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MeasureToStudy_AB_unique" ON "_MeasureToStudy"("A", "B");

-- CreateIndex
CREATE INDEX "_MeasureToStudy_B_index" ON "_MeasureToStudy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_IndicationToMeasure_AB_unique" ON "_IndicationToMeasure"("A", "B");

-- CreateIndex
CREATE INDEX "_IndicationToMeasure_B_index" ON "_IndicationToMeasure"("B");

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToConceptOfInterest" ADD FOREIGN KEY ("A") REFERENCES "AspectOfHealth"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToConceptOfInterest" ADD FOREIGN KEY ("B") REFERENCES "ConceptOfInterest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToIndication" ADD FOREIGN KEY ("A") REFERENCES "AspectOfHealth"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToIndication" ADD FOREIGN KEY ("B") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptOfInterestToMeasure" ADD FOREIGN KEY ("A") REFERENCES "ConceptOfInterest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptOfInterestToMeasure" ADD FOREIGN KEY ("B") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToStudy" ADD FOREIGN KEY ("A") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToStudy" ADD FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicationToMeasure" ADD FOREIGN KEY ("A") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicationToMeasure" ADD FOREIGN KEY ("B") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;
