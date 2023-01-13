import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import PutButton from "./PutButton";
import DeleteButton from "./DeleteButton";

function ListItems({itemList, getList}){

return(
<div>
                    <Grid container spacing={2}>
                    {itemList.map((item) => {
                        return (
                            <Grid xs={3} key={item.id}>
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
                            </Grid>
                                )})}
                    </Grid>

 </div>
)}

export default ListItems