import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import PutButton from "./PutButton";
import DeleteButton from "./DeleteButton";

import Tooltip from '@mui/material/Tooltip';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import {grey} from '@mui/material/colors';

function ListItems({itemList, getList}){

const purchasedTheme = createTheme({
    palette: {
        background: {
            default: grey[600],
            paper: grey[600],
        },
        text: {
            primary: grey[300]
        },
    },
});

return(
<>
<div>
<h2>Shopping List</h2>
</div>    
<div>

    <Grid container spacing={2}>
    {itemList.map((item) => {
        return (
        <Grid xs={3} key={item.id}>
        {item.purchased
        ?
        <ThemeProvider theme={purchasedTheme}>
            <Tooltip title="Purchased!">
            <Card>
                <CardContent>
                    <p>{item.item}</p> 
                    <p>{item.quantity} {item.unit}</p>

                </CardContent>
            </Card>
            </Tooltip>
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
 </>
)}

export default ListItems