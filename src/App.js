import React, { Component } from 'react';
import './assets/css/App.css';
// import Home from './compnents/home/Home'
// import News from './compnents/news/News'
// import Events from './compnents/events/Events'
// import List from './compnents/list/List'
import TodoList from './compnents/todoList/TodoList'
class App extends Component {
  // render 里面放的是模板 jsx
  render() {
    return (
      <div className="App">
        <h1>hellow react,跟组件</h1>
        {/* <Home></Home> */}
        {/* <News></News> */}
        {/* <Events></Events> */}
        {/* <List></List> */}
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
