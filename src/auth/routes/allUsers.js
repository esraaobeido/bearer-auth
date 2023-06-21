'use strict';
const express = require('express');
const getUsersRouters=express.Router();
const {users}=require('../models/users.model');
const bearerAuth = require('../middlewares/bearerAuth');

getUsersRouters.get('/users',bearerAuth,async(req,res,next)=>{
    try {
        const userRecords = await users.findAll({});
        const userName = userRecords.map(user => user.username);
        res.status(200).json(userName);
      } catch (error) {
        console.error(error);
        next(error);
      }
})

module.exports= getUsersRouters;