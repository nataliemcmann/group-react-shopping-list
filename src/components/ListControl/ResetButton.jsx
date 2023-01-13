import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Stack } from '@mui/material';

function ResetButton ({getList}) {
    const handlePutAll = (event) => {
        event.preventDefault();
        putAllList();
    }

    //put all request
    const putAllList = () => {
        axios.put('/all')
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
  <Stack
    p = {1}
    direction="row"
    justifyContent = "left" 
    sx={{ height: "90%" }} 
    spacing={3} 
    >
    <Box 
    sx={{ 
        width: "max-content",
        backgroundColor: "#A2588B", 
        borderRadius: 1.5  
        }}
        >
    <Button 
    onClick={handlePutAll}
     sx={{ 
        width: "max-content", 
        color: "#fff"
        }}
    >
        Reset
    </Button>
    </Box>
    </Stack>
    </>
    )
}

export default ResetButton;