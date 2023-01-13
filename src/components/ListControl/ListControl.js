import { Stack } from "@mui/material";
import React from "react";
import DeleteAllButton from "./DeleteAllButton";
import ResetButton from "./ResetButton";

function ListControl({getList}){

return(
    <>
    <Stack direction="row">
    <DeleteAllButton getList={getList}/>
    <ResetButton getList={getList}/>
    </Stack>
    </>
)
}

export default ListControl