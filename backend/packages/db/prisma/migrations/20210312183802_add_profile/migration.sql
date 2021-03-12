/*
  Warnings:

  - Added the required column `indicationId` to the `Measure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AspectOfHealth" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CoiMaohs" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ConceptOfInterest" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Measure" ADD COLUMN     "indicationId" INTEGER NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MeasureCois" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Stream" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Study" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ValidationStudies" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Indication" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aohIndications" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "aspectOfHealthId" INTEGER NOT NULL,
    "indicationId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AspectOfHealthToIndication" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AspectOfHealthToIndication_AB_unique" ON "_AspectOfHealthToIndication"("A", "B");

-- CreateIndex
CREATE INDEX "_AspectOfHealthToIndication_B_index" ON "_AspectOfHealthToIndication"("B");

-- AddForeignKey
ALTER TABLE "aohIndications" ADD FOREIGN KEY ("aspectOfHealthId") REFERENCES "AspectOfHealth"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aohIndications" ADD FOREIGN KEY ("indicationId") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToIndication" ADD FOREIGN KEY ("A") REFERENCES "AspectOfHealth"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AspectOfHealthToIndication" ADD FOREIGN KEY ("B") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD FOREIGN KEY ("indicationId") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;
