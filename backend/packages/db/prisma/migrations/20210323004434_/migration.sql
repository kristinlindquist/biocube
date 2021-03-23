/*
  Warnings:

  - The migration will remove the values [MEDICATION] on the enum `StateType`. If these variants are still used in the database, the migration will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StateType_new" AS ENUM ('SLEEP', 'ASLEEP', 'AWAKE', 'IN_BED', 'WALKING', 'MEDITATION', 'SPINNING', 'STRENGTH_TRAINING');
ALTER TABLE "Datum" ALTER COLUMN "state" TYPE "StateType_new" USING ("state"::text::"StateType_new");
ALTER TYPE "StateType" RENAME TO "StateType_old";
ALTER TYPE "StateType_new" RENAME TO "StateType";
DROP TYPE "StateType_old";
COMMIT;
