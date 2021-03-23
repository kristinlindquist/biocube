-- AlterTable
ALTER TABLE "DataType" ADD COLUMN     "abbreviation" VARCHAR(10),
ALTER COLUMN "parentId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Indication" ADD COLUMN     "abbreviation" VARCHAR(10);

-- AlterTable
ALTER TABLE "Measure" ADD COLUMN     "abbreviation" VARCHAR(10);
