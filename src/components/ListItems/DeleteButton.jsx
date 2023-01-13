import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Stack } from '@mui/material';


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
    <Stack
    p = {1}
    direction="column"
    alignItems={"center"}
    justifyContent = "space-betweem" 
    sx={{ height: "90%" }} 
    spacing={3} 
    >
    <Box 
    sx={{ 
        width: "max-content",
        backgroundColor: "#E93234", 
        borderRadius: 1.5  
        }}
        >
    <Button 
    onClick={handleDelete}
     sx={{ 
        width: "max-content", 
        color: "#fff"
        }}
    >
       Remove
    </Button>
    </Box>
    </Stack>
    </>
)

}

export default DeleteButton;