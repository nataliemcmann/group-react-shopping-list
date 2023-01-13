import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import PutButton from "./PutButton";
import DeleteButton from "./DeleteButton";

import { ThemeProvider, createTheme } from '@mui/material/styles';

function ListItems({itemList, getList}){

const purchasedTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

return(
<div>
    <Grid container spacing={2}>
    {itemList.map((item) => {
        return (
        <Grid xs={3} key={item.id}>
        {item.purchased
        ?
        <ThemeProvider theme={purchasedTheme}>
            <Card>
                <CardContent>
                    <p>{item.item}</p> 
                    <p>{item.quantity} {item.unit}</p>
                    <p>
                    <PutButton item={item} getList={getList}/>
                    <DeleteButton item={item} getList={getList}/>
                    </p>
                </CardContent>
            </Card>
        </ThemeProvider>
        :
        <Card>
            <CardContent>
                <p>{item.item}</p> 
                <p>{item.quantity} {item.unit}</p>
                <p>
                <PutButton item={item} getList={getList}/>
                <DeleteButton item={item} getList={getList}/>
                </p>
            </CardContent>
        </Card>
        }
        </Grid>
        )})}
    </Grid>

 </div>
)}

export default ListItems