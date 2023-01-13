import { useState } from 'react';
import axios from 'axios';


function PutButton ({item}) {
const handlePut = (event) => {
    event.preventDefault();
    putList({item});
}

//put request
const putList = () => {
    console.log(item.id);
    //try to insert id into url?
    axios.put('/list', {params: item.id})
    .then(response => {
        getList();
    })
    .catch(err => {
        alert('Error in PUT route');
        console.log(err);
    })
}

return (
    <>
    <button onClick={handlePut}>Buy</button>
    </>
)

}

export default PutButton;