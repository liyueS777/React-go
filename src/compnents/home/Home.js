 import React,{ Component } from 'react';
import '../../assets/css/home.css';

 class Home extends Component{

    constructor(props){
        super(props)//继承compoent,加props 是用于父子组件传值
        //定义数据
        this.state = {
            name:'xiaoA',
            age:25,
            color:'red',
            style:{
                background:'green'
            }
        }
    }//绑定属性要注意
    render(){
        return (
           <div className="home">
               <div>我是home，每个节点需要被跟节点包括</div>
               <div>我Home2</div>
               <p>name: {this.state.name}</p>
               <p>age: {this.state.age}</p>
               <a className={this.state.color}>绑定类名</a>
               <p style={{"color":"red"}}>正常style</p>
               <p style={this.state.style}>引入state 的 style</p>
               
               <label htmlFor="name">属性要绑定 </label>
               <input id="name"/>
           </div>
        )
    }

 }
export default Home