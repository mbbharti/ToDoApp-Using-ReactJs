import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListMatUI = (props) => {
    const[line,setLine]=useState(false);
    const deleteVal=(e)=>{
        setLine(true);
    }

    return (
            <div className="toDoStyle">
                <span className="deleteButton" onClick={deleteVal}>
                    <DeleteIcon />
                </span>
                <li style={{textDecoration: line ? "line-through" : "none"}}> {props.liValue} </li>
             </div>
    );
};

export default ListMatUI;