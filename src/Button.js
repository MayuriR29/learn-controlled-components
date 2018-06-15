import React from "react";
const Button = props => {
  console.log("props in button", props);
  return (
    <div>
      <button onClick={() => this.handleClick}>Submit</button>
      
    </div>
  );
};
export default Button;
