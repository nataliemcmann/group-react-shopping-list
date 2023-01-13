import { useState } from 'react';
import axios from 'axios';

function DeleteAllButton ({getList}) {
    const handleDeleteAll = (event) => {
        event.preventDefault();
        deleteAllList();
    }

    //put all request
    const deleteAllList = () => {
        axios.delete('/all')
        .then(response => {
            getList();
        })
        .catch(err => {
            alert('Error in Delete ALL route');
            console.log(err);
        })
    }

    return (
        <>
            <button onClick={handleDeleteAll}>Clear</button>
        </>
    )
}

export default DeleteAllButton;