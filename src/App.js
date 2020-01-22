import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import Footer from './components/layout/Footer';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    // numero: 4,
    todos: []
  }

  componentDidMount() {
    // console.log('Me rendericé')
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  /* componentDidUpdate() {
    console.log('Me actualicé')
  } */

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(caca => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  /* actualizarEstado = () => {
    this.setState({ numero: 10 });
  } */

  render() {
    // console.log('Me estoy renderizando')
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* <button onClick={this.actualizarEstado}>Holi</button> */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
  
export default App;
