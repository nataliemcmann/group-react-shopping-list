import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        setItemList()
    }, []);

    const getList = () => {
        axios({
            method: 'GET',
            url: '/list'
        }).then((response) => {
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
                <p>Under Construction...</p>
                {/* <ul>{itemList.map((item) => {
                    return (
                        <li>{item.item}: {item.quantity} {item.unti}</li>
                    )
                })}</ul> */}
            </main>
        </div>
    );
}

export default App;
