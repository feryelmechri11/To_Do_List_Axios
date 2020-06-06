import React, { Component } from "react";
import "./todolist.css";
class TodoList extends Component {
  render() {
    return (
      <div className="ToDoList">
        <div className="Input">
          <h2>My to do list </h2>
          <div className="Inp">
            <input
              type="text"
              placeholder="tap a task"
              onChange={(e) => this.props.GetName(e.target.value)}
            />
            <button className="AddToDo" onClick={() => this.props.AddTask()}>
              Add
            </button>
          </div>
          <div className="TodoList">
            <ul className="todos">
              {this.props.List.map((el) => (
                <li className="ToDoItem" key={el.id}>
                  {el.NameTodo}
                  <button onClick={() => this.props.Delete(el)}>X</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
