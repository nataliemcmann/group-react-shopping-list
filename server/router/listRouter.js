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

// POST //
listRouter.post('/', (req,res) => {
    const list = req.body
    const sqlText = `INSERT INTO list ("item", "quantity", "unit", "purchased")
    VALUES ($1,$2,$3,$4)`;
    pool.query(sqlText, [list.item,list.quantity,list.unit,list.purchased])

    .then((result) => {
        console.log(`Added item to the database`, result);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
    })
})

module.exports = listRouter;