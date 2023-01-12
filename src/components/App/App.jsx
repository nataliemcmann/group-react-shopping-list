import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = () => {
        axios.get('/list').then((response) => {
            console.log('This is the response from GET /list: ', response.data);
            setItemList(response.data);
        }).catch((error) => {
            console.log('Error in GET /list: ', error);
        })
    }


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

    //put request
    const putList = () => {
        console.log(item.id);
        //try to insert id into url?
        axios.put('/list/', {purchased : true})
        .then(response => {
            getList();
        })
        .catch(err => {
            alert('Error in PUT route');
            console.log(err);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ul>{itemList.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.item}: {item.quantity} {item.unit}
                        </li>
                    )
                })}</ul>
            </main>
        </div>
    );
}

export default App;








