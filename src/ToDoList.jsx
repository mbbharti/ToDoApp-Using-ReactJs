import React, { useState } from 'react';
import List from './List';

const ToDoList = ()=>{
    const[listItem,setListItem]= useState("");
    const[item,setItems]=useState([]);

    
    const deleteItem =(id)=>{
        console.log('deleted');

        setItems((oldItem)=>{
           return oldItem.filter((arrElem,index) =>{   
                return id !== index;    //if id doesnot equal to index donot return it,in short it will get deleted
            });
        });
    };
    

    const itemEvent=(e)=>{
        setListItem(e.target.value);
    };
    const addItem=()=>{
        setItems((oldItem)=>{
            return [ ...oldItem,listItem]
        });
        setListItem('');
    };

    return(
    <>
    <div className="mainDiv">
        <div className="centerDiv">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add a Item" onChange={itemEvent} value={listItem}/>
            <button onClick={addItem}> + </button>
            <ol>
                {item.map((itemVal,index) =>[
                 <List 
                 itemName={itemVal}
                 id={index}
                 key={index}
                 onSelect={deleteItem} />
                ])}
            </ol>
        </div>
    </div>
    </>
    );
}
export default ToDoList;