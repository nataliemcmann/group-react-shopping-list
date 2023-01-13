import { useState } from 'react';
import axios from 'axios';


function DeleteButton ({ item , getList}) {
const handleDelete = (event) => {
    event.preventDefault();
    deleteList({item, getList});
}

//put request
const deleteList = ({item, getList}) => {
    console.log(item.id);
    //try to insert id into url?
    axios.delete(`/list/${item.id}`)
    .then(response => {
        getList();
    })
    .catch(err => {
        alert('Error in DELETE route');
        console.log(err);
    })
}

return (
    <>
    <button onClick={handleDelete}>Remove</button>
    </>
)

}

export default DeleteButton;