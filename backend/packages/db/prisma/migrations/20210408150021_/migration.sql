-- CreateTable
CREATE TABLE "MeasureToDataType" (
    "dataTypeId" INTEGER NOT NULL,
    "measureId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "measure_data_type_key" ON "MeasureToDataType"("measureId", "dataTypeId");

-- AddForeignKey
ALTER TABLE "MeasureToDataType" ADD FOREIGN KEY ("dataTypeId") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeasureToDataType" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;
