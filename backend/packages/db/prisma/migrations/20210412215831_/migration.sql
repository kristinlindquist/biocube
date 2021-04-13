/*
  Warnings:

  - You are about to drop the `MeasureToDataType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MeasureToDataType" DROP CONSTRAINT "MeasureToDataType_dataTypeId_fkey";

-- DropForeignKey
ALTER TABLE "MeasureToDataType" DROP CONSTRAINT "MeasureToDataType_measureId_fkey";

-- DropTable
DROP TABLE "MeasureToDataType";

-- CreateTable
CREATE TABLE "MeasureProcess" (
    "dataTypeId" INTEGER NOT NULL,
    "measureId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT
);

-- CreateTable
CREATE TABLE "_DataTypeToDeviceType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "measure_data_type_key" ON "MeasureProcess"("measureId", "dataTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "_DataTypeToDeviceType_AB_unique" ON "_DataTypeToDeviceType"("A", "B");

-- CreateIndex
CREATE INDEX "_DataTypeToDeviceType_B_index" ON "_DataTypeToDeviceType"("B");

-- AddForeignKey
ALTER TABLE "MeasureProcess" ADD FOREIGN KEY ("dataTypeId") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeasureProcess" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DataTypeToDeviceType" ADD FOREIGN KEY ("A") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DataTypeToDeviceType" ADD FOREIGN KEY ("B") REFERENCES "DeviceType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
