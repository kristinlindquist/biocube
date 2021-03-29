-- CreateTable
CREATE TABLE "_IndicationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IndicationToUser_AB_unique" ON "_IndicationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_IndicationToUser_B_index" ON "_IndicationToUser"("B");

-- AddForeignKey
ALTER TABLE "_IndicationToUser" ADD FOREIGN KEY ("A") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicationToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
