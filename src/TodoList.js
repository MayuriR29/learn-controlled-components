import React from "react";
const TodoList = props => {
    console.log('in Todolist',props);
  return (
    <div>
      <ul>
        {props.arrayValues.map((eachTodo, index) => {
          return <li key={index}>{eachTodo}</li>;
        })}
      </ul>
    </div>
  );
};
export default TodoList;
