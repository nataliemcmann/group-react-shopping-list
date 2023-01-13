import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Stack } from '@mui/material';


function PutButton ({ item , getList}) {
const handlePut = (event) => {
    event.preventDefault();
    putList({item, getList});
}

//put request
const putList = ({item, getList}) => {
    console.log(item.id);
    //try to insert id into url?
    axios.put(`/list/${item.id}`)
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
        backgroundColor: "#5DB547", 
        borderRadius: 1.5  
        }}
        >
    <Button 
    onClick={handlePut}
     sx={{ 
        width: "max-content", 
        color: "#fff"
        }}
    >
        purchased
    </Button>
    </Box>
    </Stack>
    </>
)

}

export default PutButton;