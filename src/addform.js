import React, { Component } from "react";

class addtodo extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addtodo(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo: </label>
          <input
            type="text"
            placeholder="What are you forgetting?"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default addtodo;
