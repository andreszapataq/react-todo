import React, { Component } from 'react';
import Todos from './components/Todos';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Sacar el perro a cagar',
        completed: false
      },
      {
        id: 2,
        title: 'Cena con Monica',
        completed: false
      },
      {
        id: 3,
        title: 'Hacer código',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        <Footer />
      </div>
    );
  }
}
  
export default App;
