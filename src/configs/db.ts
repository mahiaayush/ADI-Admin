import {Sequelize} from 'sequelize';
const envs: any = process.env;

export const DB_CONN = {
  ACCOUNT: new Sequelize({
    dialect: 'mariadb',
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    database: envs.DB_NAME,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),
  DIAGNOSTIC: new Sequelize({
    dialect: 'mariadb',
    host: envs.DT_DB_HOST,
    port: envs.DT_DB_PORT,
    database: envs.DT_DB_NAME,
    username: envs.DT_DB_USER,
    password: envs.DT_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),
  LC: new Sequelize({
    dialect: 'mariadb',
    host: envs.LC_DB_HOST,
    port: envs.LC_DB_PORT,
    database: envs.LC_DB_NAME,
    username: envs.LC_DB_USER,
    password: envs.LC_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),
  SM: new Sequelize({
    dialect: 'mariadb',
    host: envs.SM_DB_HOST,
    port: envs.SM_DB_PORT,
    database: envs.SM_DB_NAME,
    username: envs.SM_DB_USER,
    password: envs.SM_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),

  CR: new Sequelize({
    dialect: 'mariadb',
    host: envs.CR_DB_HOST,
    port: envs.CR_DB_PORT,
    database: envs.CR_DB_NAME,
    username: envs.CR_DB_USER,
    password: envs.CR_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),

  LH: new Sequelize({
    dialect: 'mariadb',
    host: envs.LH_DB_HOST,
    port: envs.LH_DB_PORT,
    database: envs.LH_DB_NAME,
    username: envs.LH_DB_USER,
    password: envs.LH_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),
  WEB_ADMIN: new Sequelize({
    dialect: 'mariadb',
    host: envs.WEB_ADMIN_DB_HOST,
    port: envs.WEB_ADMIN_DB_PORT,
    database: envs.WEB_ADMIN_DB_NAME,
    username: envs.WEB_ADMIN_DB_USER,
    password: envs.WEB_ADMIN_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  }),
  SA: new Sequelize({
    dialect: 'mariadb',
    host: envs.SA_DB_HOST,
    port: envs.SA_DB_PORT,
    database: envs.SA_DB_NAME,
    username: envs.SA_DB_USER,
    password: envs.SA_DB_PASSWORD,
    logging: Number(envs.LOG_SQL_QUERY) === 1 ? console.log : false
  })
};
