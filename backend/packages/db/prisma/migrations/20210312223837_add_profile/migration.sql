-- AlterTable
ALTER TABLE "CoiMaohs" ALTER COLUMN "aspectOfHealthId" DROP NOT NULL,
ALTER COLUMN "conceptOfInterestId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MeasureCois" ALTER COLUMN "conceptOfInterestId" DROP NOT NULL,
ALTER COLUMN "measureId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ValidationStudies" ALTER COLUMN "measureId" DROP NOT NULL,
ALTER COLUMN "studyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "aohIndications" ALTER COLUMN "aspectOfHealthId" DROP NOT NULL,
ALTER COLUMN "indicationId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "measureIndications" ALTER COLUMN "measureId" DROP NOT NULL,
ALTER COLUMN "indicationId" DROP NOT NULL;
