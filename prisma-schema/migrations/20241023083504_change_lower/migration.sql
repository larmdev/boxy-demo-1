/*
  Warnings:

  - You are about to drop the column `Limit` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `Details` on the `PostHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `Limit`,
    DROP COLUMN `Type`,
    ADD COLUMN `limit` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `type` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `PostHistory` DROP COLUMN `Details`,
    ADD COLUMN `details` VARCHAR(2000) NULL;
