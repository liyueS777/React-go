import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom'
import './assets/css/App.css';
import Home from './compnents/home/Home'
// import News from './compnents/news/News'
import Events from './compnents/events/Events'
// import List from './compnents/list/List'
import TodoList from './compnents/todoList/TodoList2'
import Lifes from './compnents/lifes/Lifes'

import Article from './compnents/article/Article'
import Login from './compnents/login/Login'
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      title:'我是app组件的title',
      flag:true
    }

  }
  setFlag=()=>{

    this.setState({      

      flag:!this.state.flag
    })
  }
  setTitle=()=>{

    this.setState({      

      title:'我是app组件改变后的title'
    })
  }

  // render 里面放的是模板 jsx
  render() {
    return (
      <Router>
        <div className="App">
        {/* <Link to="/">首页</Link><br/>
        <Link to="/toDo">toDo</Link><br/>
        <Link to="/events">events</Link><br/>
        <Link to="/life">life</Link><br/>
        <hr/> */}
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/toDo" component={TodoList} />
          <Route path="/life" component={Lifes} />
          <Route path="/events" component={Events} />
          <Route path="/article/:articleId/:id" component={Article} />
          <Redirect to="/" />
        </Switch>

        
        {/* {
          this.state.flag?<Lifes data-a="1" title={this.state.title} />:""
        }
         <button onClick={this.setFlag}>挂载和销毁声明周期函数组件</button>
        <button onClick={this.setTitle}>改变父组件title的值</button> */}
      </div>
      </Router>
    );
  }
}

export default App;


