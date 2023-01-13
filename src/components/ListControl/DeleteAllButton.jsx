import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Stack } from '@mui/material';

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
    <Stack
    p = {1}
    direction="row"
    alignItems={"center"}
    justifyContent = "space-betweem" 
    sx={{ height: "90%" }} 
    spacing={3} 
    >
    <Box 
    sx={{ 
        width: "max-content",
        backgroundColor: "#872D39", 
        borderRadius: 1.5  
        }}
        >
    <Button 
    onClick={handleDeleteAll}
     sx={{ 
        width: "max-content", 
        color: "#fff"
        }}
    >
        Clear
    </Button>
    </Box>
    </Stack>
    </>
    )
}

export default DeleteAllButton;