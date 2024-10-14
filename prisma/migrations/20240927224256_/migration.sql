-- DropIndex
DROP INDEX "Journal_drinkId_key";

-- AlterTable
ALTER TABLE "Journal" ALTER COLUMN "timeDrunk" SET DEFAULT CURRENT_TIMESTAMP;
