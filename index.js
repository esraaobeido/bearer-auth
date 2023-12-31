'use strict';
require('dotenv').config();
let PORT = process.env.PORT || 3000;
const server=require("./src/server");
const {sequelize}=require("./src/auth/models/index.model");

sequelize.sync({force: true}).then(() => {
        server.start(PORT);
    }).catch(console.error);
