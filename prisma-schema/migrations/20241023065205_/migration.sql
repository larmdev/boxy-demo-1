-- AlterTable
ALTER TABLE `Post` ADD COLUMN `Limit` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `isLimit` BOOLEAN NOT NULL DEFAULT false;
