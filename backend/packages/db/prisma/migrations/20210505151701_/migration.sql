/*
  Warnings:

  - You are about to drop the column `sql` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the column `aggregation` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the column `chartType` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the column `meta` on the `Measure` table. All the data in the column will be lost.
  - You are about to drop the `DataType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Datum` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MeasureComponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DataTypeToDeviceType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DataTypeToStudy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FilterToMeasureComponent` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[recipeId]` on the table `Measure` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `recipeId` to the `Filter` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MeasureType" AS ENUM ('BIOMARKER', 'SURROGATE', 'PRO', 'CLINRO', 'OBSRO', 'PERFO');

-- DropForeignKey
ALTER TABLE "DataType" DROP CONSTRAINT "DataType_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Datum" DROP CONSTRAINT "Datum_dataTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Datum" DROP CONSTRAINT "Datum_deviceId_fkey";

-- DropForeignKey
ALTER TABLE "MeasureComponent" DROP CONSTRAINT "MeasureComponent_dataTypeId_fkey";

-- DropForeignKey
ALTER TABLE "MeasureComponent" DROP CONSTRAINT "MeasureComponent_measureId_fkey";

-- DropForeignKey
ALTER TABLE "_DataTypeToDeviceType" DROP CONSTRAINT "_DataTypeToDeviceType_A_fkey";

-- DropForeignKey
ALTER TABLE "_DataTypeToDeviceType" DROP CONSTRAINT "_DataTypeToDeviceType_B_fkey";

-- DropForeignKey
ALTER TABLE "_DataTypeToStudy" DROP CONSTRAINT "_DataTypeToStudy_A_fkey";

-- DropForeignKey
ALTER TABLE "_DataTypeToStudy" DROP CONSTRAINT "_DataTypeToStudy_B_fkey";

-- DropForeignKey
ALTER TABLE "_FilterToMeasureComponent" DROP CONSTRAINT "_FilterToMeasureComponent_A_fkey";

-- DropForeignKey
ALTER TABLE "_FilterToMeasureComponent" DROP CONSTRAINT "_FilterToMeasureComponent_B_fkey";

-- AlterTable
ALTER TABLE "Filter" ADD COLUMN     "recipeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Measure" DROP COLUMN "sql",
DROP COLUMN "aggregation",
DROP COLUMN "chartType",
DROP COLUMN "meta",
ADD COLUMN     "parentId" INTEGER,
ADD COLUMN     "recipeId" INTEGER,
ADD COLUMN     "type" "MeasureType";

-- DropTable
DROP TABLE "DataType";

-- DropTable
DROP TABLE "Datum";

-- DropTable
DROP TABLE "MeasureComponent";

-- DropTable
DROP TABLE "_DataTypeToDeviceType";

-- DropTable
DROP TABLE "_DataTypeToStudy";

-- DropTable
DROP TABLE "_FilterToMeasureComponent";

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "answerId" INTEGER,
    "deviceId" INTEGER NOT NULL,
    "duration" BIGINT NOT NULL DEFAULT 0,
    "measureId" INTEGER NOT NULL,
    "meta" JSONB,
    "state" "StateType",
    "value" DOUBLE PRECISION,
    "text" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeasureRecipe" (
    "id" SERIAL NOT NULL,
    "aggregation" "AggregationType",
    "measureId" INTEGER,
    "sql" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReportRecipe" (
    "id" SERIAL NOT NULL,
    "chartType" "ChartType",
    "meta" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "measureId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "questionId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "value" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DeviceTypeToMeasure" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MeasureToReportRecipe" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "time_device_measure_key" ON "Data"("startedAt", "deviceId", "measureId");

-- CreateIndex
CREATE UNIQUE INDEX "_DeviceTypeToMeasure_AB_unique" ON "_DeviceTypeToMeasure"("A", "B");

-- CreateIndex
CREATE INDEX "_DeviceTypeToMeasure_B_index" ON "_DeviceTypeToMeasure"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MeasureToReportRecipe_AB_unique" ON "_MeasureToReportRecipe"("A", "B");

-- CreateIndex
CREATE INDEX "_MeasureToReportRecipe_B_index" ON "_MeasureToReportRecipe"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Measure_recipeId_unique" ON "Measure"("recipeId");

-- AddForeignKey
ALTER TABLE "Data" ADD FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Data" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD FOREIGN KEY ("measureId") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeviceTypeToMeasure" ADD FOREIGN KEY ("A") REFERENCES "DeviceType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DeviceTypeToMeasure" ADD FOREIGN KEY ("B") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToReportRecipe" ADD FOREIGN KEY ("A") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToReportRecipe" ADD FOREIGN KEY ("B") REFERENCES "ReportRecipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filter" ADD FOREIGN KEY ("recipeId") REFERENCES "MeasureRecipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD FOREIGN KEY ("parentId") REFERENCES "Measure"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD FOREIGN KEY ("recipeId") REFERENCES "MeasureRecipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
