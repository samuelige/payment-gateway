import { Sequelize } from "sequelize";
import { POSTGRES_DB } from "./config";
import logger from "./logger";

export const sequelize:Sequelize = new Sequelize(POSTGRES_DB, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        multipleStatements: true
    }
});

export async function databaseConnect(): Promise<void> {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        logger.info('Postgres database connection has been established succesfuly.')
    } catch (error) {
        logger.error('Unable to connect to database.', error);
    }
}