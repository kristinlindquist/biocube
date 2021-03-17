-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('TABLE');

-- CreateEnum
CREATE TYPE "QueryDocumentType" AS ENUM ('GetMeasuresDocument', 'GetIndicationsDocument');

-- CreateEnum
CREATE TYPE "MutationDocumentType" AS ENUM ('UpsertMeasureDocument', 'DeleteMeasureDocument');

-- CreateTable
CREATE TABLE "Template" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "name" VARCHAR(255) NOT NULL,
    "title" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Query" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "document" "QueryDocumentType" NOT NULL,
    "parameters" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mutation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "document" "MutationDocumentType" NOT NULL,
    "parameters" JSONB NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "type" "ComponentType" NOT NULL,
    "readId" INTEGER,
    "upsertId" INTEGER,
    "deleteId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PageToTemplate" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PageToTemplate_AB_unique" ON "_PageToTemplate"("A", "B");

-- CreateIndex
CREATE INDEX "_PageToTemplate_B_index" ON "_PageToTemplate"("B");

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("readId") REFERENCES "Query"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("upsertId") REFERENCES "Mutation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("deleteId") REFERENCES "Mutation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToTemplate" ADD FOREIGN KEY ("A") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToTemplate" ADD FOREIGN KEY ("B") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;
