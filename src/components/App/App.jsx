import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PutButton from './PutButton.jsx'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';

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

    const resetList = () => {
        axios.delete('/list')
        .then(response  =>  {
            console.log(response)
        })
        .catch(errorr => {
            console.log(errorr)
        })
        console.log('CLicked')
      }
      const removeItem =  async (id) => {
        try {
            const response = await axios.delete(`/list/:${id}`)
            console.log('Reponse from Remove Item', response)
            setItemList(response.data)
        } catch (error) {
            console.error('DELETE response error', err)
        }
      };

    return (
        <div className="App">
            <Header />
            <main>
            <ItemForm getList={getList}/>
                <p>Under Construction...</p>
                <div>
                    <Grid container spacing={2}>
                    {itemList.map((item) => {
                        return (
                            <Grid xs={3} key={item.id}>
                                <Card>
                                    <CardContent>
                                        <p>{item.item}</p> 
                                        <p>{item.quantity} {item.unit}</p>
                                        {/* Buttons here */}
                                    </CardContent>
                                </Card>
                            </Grid>
                                )})}
                    </Grid>

                </div>
            </main>
        </div>
    );
}

export default App;








