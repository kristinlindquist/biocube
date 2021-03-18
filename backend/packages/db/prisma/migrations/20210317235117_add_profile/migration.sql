-- CreateTable
CREATE TABLE "_ComponentToPage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComponentToPage_AB_unique" ON "_ComponentToPage"("A", "B");

-- CreateIndex
CREATE INDEX "_ComponentToPage_B_index" ON "_ComponentToPage"("B");

-- AddForeignKey
ALTER TABLE "_ComponentToPage" ADD FOREIGN KEY ("A") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToPage" ADD FOREIGN KEY ("B") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
