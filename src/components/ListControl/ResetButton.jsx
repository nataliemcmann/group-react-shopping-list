import { useState } from 'react';
import axios from 'axios';

function ResetButton ({getList}) {
    const handlePut = (event) => {
        event.preventDefault();
        putAllList();
    }

    //put all request
    const putAllList = () => {
        axios.put('/list/all')
        .then(response => {
            getList();
        })
        .catch(err => {
            alert('Error in PUT ALL route');
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={handlePutAll}>Reset</button>
        </>
    )
}