-- AlterTable
ALTER TABLE "AspectOfHealth" ADD COLUMN     "abbreviation" VARCHAR(10);

-- AlterTable
ALTER TABLE "ConceptOfInterest" ADD COLUMN     "abbreviation" VARCHAR(10);

-- AlterTable
ALTER TABLE "DeviceType" ADD COLUMN     "abbreviation" VARCHAR(10);

-- AlterTable
ALTER TABLE "Study" ADD COLUMN     "abbreviation" VARCHAR(10);

-- CreateTable
CREATE TABLE "_DataTypeToStudy" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_AspectOfHealthToStudy" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ConceptOfInterestToStudy" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DataTypeToStudy_AB_unique" ON "_DataTypeToStudy"("A", "B");

-- CreateIndex
CREATE INDEX "_DataTypeToStudy_B_index" ON "_DataTypeToStudy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AspectOfHealthToStudy_AB_unique" ON "_AspectOfHealthToStudy"("A", "B");

-- CreateIndex
CREATE INDEX "_AspectOfHealthToStudy_B_index" ON "_AspectOfHealthToStudy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ConceptOfInterestToStudy_AB_unique" ON "_ConceptOfInterestToStudy"("A", "B");

-- CreateIndex
CREATE INDEX "_ConceptOfInterestToStudy_B_index" ON "_ConceptOfInterestToStudy"("B");

-- AddForeignKey
ALTER TABLE "_DataTypeToStudy" ADD FOREIGN KEY ("A") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DataTypeToStudy" ADD FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToStudy" ADD FOREIGN KEY ("A") REFERENCES "AspectOfHealth"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToStudy" ADD FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptOfInterestToStudy" ADD FOREIGN KEY ("A") REFERENCES "ConceptOfInterest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptOfInterestToStudy" ADD FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;
