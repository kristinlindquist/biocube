-- AlterTable
ALTER TABLE "AspectOfHealth" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ConceptOfInterest" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DeviceType" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Indication" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Measure" ALTER COLUMN "description" DROP NOT NULL;
