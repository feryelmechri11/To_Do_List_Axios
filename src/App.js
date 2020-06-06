import React, { Component } from "react";
import "./App.css";
import TodoList from "./Todolist";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };


  GetName = (value) => {
    this.setState({ TaskName: value });
    console.log(this.state.TaskName);
  };

  Delete = (el) => {
    let id = el.id;
    axios.delete(`http://localhost:5000/todoList/${id}`);
    axios
      .get("http://localhost:5000/todoList")
      .then((res) => this.setState({ todos: res.data }));
  };

  AddTask = () => {
    let task = {
      NameTodo: this.state.TaskName,
 

    };
    axios.post("http://localhost:5000/todoList", task);
    axios
      .get("http://localhost:5000/todoList")
      .then((res) => this.setState({ todos: res.data }));
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/todoList")
      .then((res) => this.setState({ todos: res.data }));
  }

  render() {
    return (
      <div className="App">
        <TodoList
          List={this.state.todos}
          Delete={this.Delete}
          GetName={this.GetName}
          AddTask={this.AddTask}
        />
      </div>
    );
  }
}

export default App;
