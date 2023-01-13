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

// PUT //

listRouter.put('/:id', (req,res) => {
    console.log('In PUT route');
    console.log('req.params: ', req.params);
    console.log('req.body: ', req.body);
    
    let sqlQuery = 
        `UPDATE "list"
            SET "purchased"='TRUE'
            WHERE "id"=$1;`;
    let sqlValues = [req.body.purchased, req.params.id];
    pool.query(sqlQuery, sqlValues)
    .then((response) => {
        console.log('Success in PUT');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in PUT: ', error)
        res.sendStatus(500);
    })
})



listRouter.delete('/', (req, res) => {
  console.log(req.data);
  let idToDelete = req.data.id;

  let sqlQuery = `
    DELETE FROM "list"
      WHERE "id"=$1;        
  `
  let sqlValues = [idToDelete];
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log( dbErr);
      res.sendStatus(500);
    })
})

module.exports = listRouter;