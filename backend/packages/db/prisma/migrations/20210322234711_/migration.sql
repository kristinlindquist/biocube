/*
  Warnings:

  - The migration will change the primary key for the `Datum` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Datum` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[startedAt,deviceId,dataTypeId]` on the table `Datum`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Datum" DROP CONSTRAINT "Datum_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "time_device_data_key" ON "Datum"("startedAt", "deviceId", "dataTypeId");
