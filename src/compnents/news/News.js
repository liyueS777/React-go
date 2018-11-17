import React from 'react';
import '../../assets/css/news.css'
//引入本地图片
import logo from '../../assets/images/logo.svg'
class News extends React.Component{

   constructor(props){
       //传入props 用于父子组件传值
       super(props)//继承compoent,加props 是用于父子组件传值
       //定义数据
       this.state = {
           title:'我是title',
           msg:"新闻",
           newsList:[
                {
                    name:'aaa',
                    id:1
                },
                {
                    name:'bbb',
                    id:2
                }
           ],
           list2:[
                {
                    name:'ccc',
                    id:3
                },
                {
                    name:'ddd',
                    id:4
                }
           ]
       }

       this.getMsgData = this.getMsgData.bind(this)
   }

   run(){
       console.log('我是run方法');
   }
   // 有三种： 标签里面bind(this)
   getData(){
       console.log(this.state.title)
   }
   getMsgData(){
    console.log(this.state.msg)       
   }
   getListData = (p)=>{//箭头函数指向当前上下文
    console.log(p,this.state.msg)
   }

   setData = ()=>{
        //改变state 的值
        this.setState({
            msg:'我被setState改变啦'
        })
    }
    setName = (name,name2,a)=>{
        //如果不传递默认是e
        console.log(name,name2,a)
        //通过传参改变值
        this.setState({
            msg:name
        })
    }

   render(){
       var newsRes = this.state.newsList.map(v=>(
           <li key={v.id}>{v.name}+'=-='+{v.id}</li>
       ))
       return (
          <div className="news" title={this.state.title}>
              <ul>
                  <h1 onClick={this.setName.bind(this,'123',456)}>函数传参改变</h1>
                  <h1 onClick={this.setData}>改变state的值：{this.state.msg}</h1>
                  <h1 onClick={this.run}>{this.state.msg}</h1>
                  <h1 onClick={this.getData.bind(this)}>{this.state.msg}</h1>
                  <h1 onClick={this.getMsgData}>{this.state.msg}</h1>
                  <h1 onClick={this.getListData}>{this.state.msg}</h1>
                  <h2>在react 单标签要封闭加 /</h2>
                  <div>
                      图片路径:方法一:impot
                      <img src={logo} />
                      图片路径:方法二：require
                      <img src={require('../../assets/images/logo.svg')} />
                      <hr/>
                      <ul>
                          {newsRes}
                      </ul>
                      <ol>
                          {
                              this.state.list2.map(v=>(
                                  (<li key={v.id}>{v.name+v.id}</li>)
                              ))
                          }
                      </ol>
                  </div>
              </ul>
          </div>
       )
   }

}
export default News