"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "welcome",
    database: "nebuloand_local",
    synchronize: false,
    logging: false,
    entities: ["src/entity/*.{js,ts}"],
    migrations: ["src/migrations/*.{js,ts}"],
});
