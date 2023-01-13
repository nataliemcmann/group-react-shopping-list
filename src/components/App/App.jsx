import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ItemForm from '../ItemForm/ItemForm.js';
import ListItems from '../ListItems/ListItems.js';

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
            <ListItems 
            itemList={itemList}
            getList={getList}
            />
            </main>
        </div>
    );
}

export default App;








