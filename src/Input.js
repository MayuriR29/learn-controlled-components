import React from 'react';
const Input=(props)=>{
    console.log('props in Input',props);
    console.log('todos',props.todos);
    
    return(
        <div>       
        <input type="text" value={props.value} onChange={(event)=>props.handleChange}/> 
        </div>
        
    );
    
}

export default Input;