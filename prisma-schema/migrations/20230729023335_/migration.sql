-- CreateTable
CREATE TABLE `Account` (
    `accountId` VARCHAR(36) NOT NULL,
    `username` VARCHAR(200) NOT NULL,
    `firstName` VARCHAR(200) NULL,
    `lastName` VARCHAR(200) NULL,
    `passwordHash` VARCHAR(200) NOT NULL,
    `passwordSalt` VARCHAR(45) NOT NULL,
    `role` VARCHAR(45) NOT NULL,
    `isDelete` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`accountId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activity` (
    `activityId` VARCHAR(36) NOT NULL,

    PRIMARY KEY (`activityId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
