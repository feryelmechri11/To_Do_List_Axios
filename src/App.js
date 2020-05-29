import React from "react";
import "./App.css";
import axios from "axios";
export default class App extends React.Component {
  state = { todos: [] };

  async componentDidMount() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");

    await new Promise((x) => setTimeout(x, 3000));

    this.setState({ todos: result.data });
  }

  delete(e) {
    e.preventDefault();
    axios
      .delete('"https://jsonplaceholder.typicode.com/todos"{this.state.id}')
      .then((res) => console.log(res.data));
  }

  /******************************************************************* */
  render() {
    return (
      <div className="container">
        {this.state.todos.length > 0 ? (
          <div>
            <ul className="list-group">
              <div className="list">Todo List Axios </div>
              <hr></hr>

              {this.state.todos.map((todo) => (
                <li
                  key={todo.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {todo.title}
                  <span>
                    <input type="checkbox" checked={todo.completed} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="loader">
            <span className="sr-only"> Loading ...</span>
          </div>
        )}
      </div>
    );
  }
}
