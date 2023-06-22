"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "welcome",
    database: "nebuloand_local",
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    migrations: ["src/migrations/*.{js,ts}"],
});
