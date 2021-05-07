-- CreateTable
CREATE TABLE "_ConceptOfInterestToIndication" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ConceptOfInterestToIndication_AB_unique" ON "_ConceptOfInterestToIndication"("A", "B");

-- CreateIndex
CREATE INDEX "_ConceptOfInterestToIndication_B_index" ON "_ConceptOfInterestToIndication"("B");

-- AddForeignKey
ALTER TABLE "_ConceptOfInterestToIndication" ADD FOREIGN KEY ("A") REFERENCES "ConceptOfInterest"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ConceptOfInterestToIndication" ADD FOREIGN KEY ("B") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
