-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "QueryDocumentType" ADD VALUE 'GetAspectOfHealthDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'GetAspectsOfHealthDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'UpsertAspectOfHealthDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'DeleteAspectOfHealthDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'GetConceptOfInterestDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'GetConceptsOfInterestDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'UpsertConceptOfInterestDocument';
ALTER TYPE "QueryDocumentType" ADD VALUE 'DeleteConceptOfInterestDocument';
