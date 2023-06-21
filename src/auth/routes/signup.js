'use strict';
const express = require('express');
const signupRouters=express.Router();
const {users}=require('../models/users.model');
const bcrypt = require('bcrypt');

signupRouters.post('/signup',async(req,res)=>{
    const userName= req.body.username;
    console.log(userName);
    let password = await bcrypt.hash(req.body.password, 10);
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await users.create({
            username:userName,
            password,
        });
        res.status(201).json(record);
      } catch (e) { res.status(403).send('this username is already used'); }

})
module.exports=signupRouters;