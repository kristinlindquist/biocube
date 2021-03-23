/*
  Warnings:

  - You are about to drop the column `streamId` on the `Datum` table. All the data in the column will be lost.
  - You are about to drop the `Stream` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `deviceId` to the `Datum` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataTypeId` to the `Datum` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Stream" DROP CONSTRAINT "Stream_dataTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Datum" DROP CONSTRAINT "Datum_streamId_fkey";

-- AlterTable
ALTER TABLE "Datum" DROP COLUMN "streamId",
ADD COLUMN     "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deviceId" INTEGER NOT NULL,
ADD COLUMN     "dataTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Stream";

-- AddForeignKey
ALTER TABLE "Datum" ADD FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Datum" ADD FOREIGN KEY ("dataTypeId") REFERENCES "DataType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
