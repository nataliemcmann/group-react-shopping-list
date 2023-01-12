import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;


const postList = () => {
    axios.post('/list', { item : newItem, quantity: newQuantity, unit : newUnit, purchased, purchasedStatus  })
      .then(response => {
        // clear inputs
        setNewItem('');
        setQuantity(0)
        setNewUnit('')
        setPurchasedStatus(false);
        getList();
      })
      .catch(err => {
        alert('Error Adding Item');
        console.log(err);
      })
  };





