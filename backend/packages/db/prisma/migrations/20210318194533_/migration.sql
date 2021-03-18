-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('TABLE');

-- CreateEnum
CREATE TYPE "QueryDocumentType" AS ENUM ('GetMeasuresDocument', 'GetIndicationsDocument');

-- CreateEnum
CREATE TYPE "MutationDocumentType" AS ENUM ('UpsertMeasureDocument', 'DeleteMeasureDocument');

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "id" BIGSERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "id" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stream" (
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "id" BIGSERIAL NOT NULL,
    "deviceId" BIGINT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Datum" (
    "value" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" BIGSERIAL NOT NULL,
    "streamId" BIGINT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AspectOfHealth" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConceptOfInterest" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Study" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "abstract" TEXT,
    "authors" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Indication" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Template" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,
    "title" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Query" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "document" "QueryDocumentType" NOT NULL,
    "parameters" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mutation" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "document" "MutationDocumentType" NOT NULL,
    "parameters" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "type" "ComponentType" NOT NULL,
    "readId" BIGINT,
    "upsertId" BIGINT,
    "deleteId" BIGINT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AspectOfHealthToConceptOfInterest" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_AspectOfHealthToIndication" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_ConceptOfInterestToMeasure" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_IndicationToMeasure" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_MeasureToStudy" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_PageToTemplate" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_ComponentToPage" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

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
CREATE UNIQUE INDEX "_IndicationToMeasure_AB_unique" ON "_IndicationToMeasure"("A", "B");

-- CreateIndex
CREATE INDEX "_IndicationToMeasure_B_index" ON "_IndicationToMeasure"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MeasureToStudy_AB_unique" ON "_MeasureToStudy"("A", "B");

-- CreateIndex
CREATE INDEX "_MeasureToStudy_B_index" ON "_MeasureToStudy"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_PageToTemplate_AB_unique" ON "_PageToTemplate"("A", "B");

-- CreateIndex
CREATE INDEX "_PageToTemplate_B_index" ON "_PageToTemplate"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ComponentToPage_AB_unique" ON "_ComponentToPage"("A", "B");

-- CreateIndex
CREATE INDEX "_ComponentToPage_B_index" ON "_ComponentToPage"("B");

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Datum" ADD FOREIGN KEY ("streamId") REFERENCES "Stream"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("deleteId") REFERENCES "Mutation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("readId") REFERENCES "Query"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("upsertId") REFERENCES "Mutation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

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
ALTER TABLE "_IndicationToMeasure" ADD FOREIGN KEY ("A") REFERENCES "Indication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IndicationToMeasure" ADD FOREIGN KEY ("B") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToStudy" ADD FOREIGN KEY ("A") REFERENCES "Measure"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MeasureToStudy" ADD FOREIGN KEY ("B") REFERENCES "Study"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToTemplate" ADD FOREIGN KEY ("A") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToTemplate" ADD FOREIGN KEY ("B") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToPage" ADD FOREIGN KEY ("A") REFERENCES "Component"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComponentToPage" ADD FOREIGN KEY ("B") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
