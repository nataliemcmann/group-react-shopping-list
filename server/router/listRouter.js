const { Router, application } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const listRouter = express.Router();

// put routes here
// GET //
listRouter.get('/', (req, res) => {
    console.log('in GET route');
    let sqlQuery = `
    SELECT * FROM "list"
    ORDER BY "item" ASC
    `;
    pool.query(sqlQuery)
    .then((dbRes) => {
        res.send(dbRes.rows);
    })
    .catch((dbErr)=> {
        console.log('GET route not working', dbErr);
        res.sendStatus(500);
    })
})

module.exports = listRouter;