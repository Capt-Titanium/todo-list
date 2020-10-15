import React, { Component } from "react";
import Todos from "./todos";
import Addtodo from "./addform";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "finish react tutorials" },
      { id: 2, content: "play pubg" },
      { id: 3, content: "chatting and stuff" },
    ],
  };
  deletetodo = (id) => {
    const todos = this.state.todos.filter((todos) => {
      return todos.id !== id;
    });
    this.setState({
      todos,
    });
  };
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">my todo-list</h1>
        <Todos todos={this.state.todos} deletetodo={this.deletetodo} />
        <Addtodo addtodo={this.addtodo} />
      </div>
    );
  }
}

export default App;
