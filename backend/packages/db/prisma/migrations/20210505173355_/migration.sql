/*
  Warnings:

  - You are about to drop the column `name` on the `Question` table. All the data in the column will be lost.
  - Added the required column `description` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL;
