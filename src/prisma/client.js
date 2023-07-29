const { PrismaClient } = require('../../prisma-schema/generated/prisma-client/index.js');

const writeClient = new PrismaClient({
    datasources: {
        db: {
            url: `${process.env.DATABASE_URL}`,
        }
    }
});

const readClient = new PrismaClient({
    datasources: {
        db: {
            url: `${process.env.DATABASE_URL}`
        }
    }
});

module.exports = {
    writeClient,
    readClient
}
