import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PutButton from './PutButton.jsx'

import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.js';


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

    return (
        <div className="App">
            <Header />
            <main>
            <ItemForm getList={getList}/>
                <p>Under Construction...</p>
                <ul>{itemList.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.item}: {item.quantity} {item.unit}
                            <PutButton item={item} getList={getList}/>
                        </li>
                    )
                })}</ul>
            </main>
        </div>
    );
}

export default App;








