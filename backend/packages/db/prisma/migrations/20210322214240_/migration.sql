/*
  Warnings:

  - Added the required column `deviceTypeId` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Device" ADD COLUMN     "deviceTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "DeviceType" (
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "parentId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DeviceType" ADD FOREIGN KEY ("parentId") REFERENCES "DeviceType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD FOREIGN KEY ("deviceTypeId") REFERENCES "DeviceType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
