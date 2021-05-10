import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

import Navbar from './components/Navbar';
import {BrowserRouter,Route, Switch} from 'react-router-dom';    //to use it surround the jsx code by the BrowserRouter tag, then set up the routes in the template
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const newtodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos : newtodos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let newtodos = [...this.state.todos, todo];
    this.setState({
      todos: newtodos,
    })
  }
  render(){
    return(
      <BrowserRouter>    
        <div>
          <Navbar />
          {/*load the routes: whenever a user goes to this route then load that component*/}
          <Switch>    {/*show only one of these routes at a time, the first one that matched the conditions (then it stops loading other components)*/}
            {/*<Route path="/home" component={Home} />    per non ripetere Home component in tutte le pagine (però magari non mi piace la url così, allora segui metodo di sotto)*/}     
            <Route exact path="/" component={Home} />     
            <Route path="/about" component={About} />     
            <Route path="/contact" component={Contact} />     
            <Route path="/:post_id" component={Post} />     
          </Switch>

          <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
