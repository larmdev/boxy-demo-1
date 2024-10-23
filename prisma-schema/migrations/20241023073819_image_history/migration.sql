-- CreateTable
CREATE TABLE `ImagePostHistory` (
    `imagePostHistoryId` VARCHAR(36) NOT NULL,
    `postHistoryId` VARCHAR(36) NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`imagePostHistoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImagePostHistory` ADD CONSTRAINT `ImagePostHistory_postHistoryId_fkey` FOREIGN KEY (`postHistoryId`) REFERENCES `PostHistory`(`postHistoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
