import React from 'react';


const List = (props)=>{

    return (
        <>
        <div className="toDoStyle">
            <i className="fa fa-times" aria-hidden="true" 
            onClick={()=>{
                props.onSelect(props.id);
            }} 
            >-</i>
            <li> {props.itemName}</li>
        </div>
        </>
    );
}

export default List;