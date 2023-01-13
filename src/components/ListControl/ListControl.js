import React from "react";
import DeleteAllButton from "./DeleteAllButton";
import ResetButton from "./ResetButton";

function ListControl({getList}){

return(
    <>
    <DeleteAllButton getList={getList}/>
    <ResetButton getList={getList}/>
    </>
)
}

export default ListControl