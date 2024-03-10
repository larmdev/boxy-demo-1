-- AlterTable
ALTER TABLE `Account` ADD COLUMN `branch` VARCHAR(200) NULL,
    ADD COLUMN `email` VARCHAR(200) NULL,
    ADD COLUMN `faculty` VARCHAR(200) NULL;

-- AlterTable
ALTER TABLE `PostHistory` MODIFY `isActive` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Image` (
    `imageId` VARCHAR(36) NOT NULL,
    `postId` VARCHAR(36) NOT NULL,
    `imageUrl` VARCHAR(500) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`imageId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`postId`) ON DELETE RESTRICT ON UPDATE CASCADE;
