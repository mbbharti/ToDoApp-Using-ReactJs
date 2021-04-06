import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListMatUI from './ListMatUI';

const ToDoAppMatUI = () => {

    const [item, setItem] = useState([""]);
    const [allItems, setAllItems] = useState([]);

    const changeItem = (e) => {
        setItem(e.target.value);
    }
    const addItem = () => {
        if(item === "")
        {
            alert("Please enter Text before adding....");
        }
        else{

            setAllItems((prevData) => {
                return [...prevData, item];
            });
            setItem("");
        }
    }

    return (
        <>
            <div className="mainDiv">
                <div className="centerDiv">
                    <h1>ToDo App</h1>
                    <input type="text" value={item} onChange={changeItem} placeholder="Enter An Item" />
                    <Button className="btn" onClick={addItem} >
                        <AddIcon />
                    </Button>
                    <ol>
                        {allItems.map((val,index) => {
                           return <ListMatUI key={index} liValue={val} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDoAppMatUI;