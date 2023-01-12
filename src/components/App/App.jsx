import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    const postList = () => {
    axios.post('/list', { item : newItem, quantity: newQuantity, unit : newUnit, purchased : 0 })//<list item coresponding names with sql database// //^axios post with all items to be sent to server side for data base package//
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








