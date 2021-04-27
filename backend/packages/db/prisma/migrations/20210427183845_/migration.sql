/*
  Warnings:

  - Changed the type of `vizState` on the `DashboardGraph` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "DashboardGraph" DROP COLUMN "vizState",
ADD COLUMN     "vizState" JSONB NOT NULL;
