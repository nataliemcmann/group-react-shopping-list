import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, TextField } from '@mui/material';

function ItemForm({getList}){
let [newItem, setNewItem] = useState('');
let [newQuantity, setQuantity] = useState(0);
let [newUnit, setNewUnit] = useState('');
let [purchased, setPurchasedStatus] = useState('false');

 const postList = () => {
    axios.post('/list', { item : newItem, quantity: newQuantity, unit : newUnit, purchased : purchased })//<list item coresponding names with sql database// //^axios post with all items to be sent to server side for data base package//
      .then(response => {
        // ^response ready for use in rendering new list item//
        setNewItem('');
        setQuantity(0)
        setNewUnit('')
        setPurchasedStatus(false);
        //^reset all form inputs to null//
        getList();
        //^rerender listItems on the dom//
      })
      .catch(err => {
        alert('Error Adding Item');
        console.log(err);
      })
  };

const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem) {
      postList();
    }
    else {
      alert('dont forget to add an item!');
    }
  }


return(
<>
<h2>Add an Item</h2>
<form onSubmit={handleSubmit}>
        <label>
          Item: 
        </label>
        <input
          type="text"
          placeholder="Item"
          value={newItem}
          onChange={(evt) => setNewItem(evt.target.value)}
        />
        <label>
          Quantity:
        </label>
        <input
          type="number"
          placeholder="Quantity"
          value={newQuantity}
          onChange={(evt) => setQuantity(evt.target.value)}
        />
        <label>
          Unit: 
        </label>
         <input
          type="text"
          placeholder="Unit"
          value={newUnit}
          onChange={(evt) => setNewUnit(evt.target.value)}
        />
        <button type="submit">Save</button>
      </form>
</>
);
}

export default ItemForm;