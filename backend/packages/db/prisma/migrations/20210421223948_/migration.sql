-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "readOneId" INTEGER;

-- AddForeignKey
ALTER TABLE "Component" ADD FOREIGN KEY ("readOneId") REFERENCES "DataQuery"("id") ON DELETE SET NULL ON UPDATE CASCADE;
