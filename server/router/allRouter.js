const { Router, application } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const allRouter = express.Router();

// PUT all //
allRouter.put('/', (req,res) => {
    console.log('in PUT ALL route');
    let sqlQuery = `
    UPDATE "list"
    SET "purchased"=FALSE
    `;
    pool.query(sqlQuery)
    .then((response) => {
        console.log('Success in PUT ALL');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in PUT ALL: ', error)
        res.sendStatus(500);
    })
})

module.exports = allRouter;
