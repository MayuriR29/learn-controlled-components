import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { value: "", todos: [] };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleClick() {
    this.setState({ todos: [...this.state.todos, this.state.value] });
    this.setState({ value: "" });
  }
  render() {
    console.log("in render value", this.state.value);
    console.log("in render todos", this.state.todos);
    return (
      <div>
        <h1>Hello</h1>
        <Input handleChange={() => this.handleChange()} />       
        <Button handleClick={() => this.handleClick()} />
        <TodoList arrayValues={this.state.todos} />
      </div>
    );
  }
}

export default App;
