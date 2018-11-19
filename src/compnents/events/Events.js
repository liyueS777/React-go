import React from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import A from '../common/A'
import B from '../common/B'
class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:"这里是events",
            v:"124"
        }
    }
    run = (event)=>{
        console.log('run',this.state.title,event.target,event.target.getAttribute("data-u"))
        //event.target 当前事件的执行的dom节点
        event.target.style.color = 'red'
    }
    getInputValue = ()=>{
        console.log(this.state.v)
    }
    inputChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            v:e.target.value
        })
    }
    componentWillMount(){
        console.log(this.props.match)
    }
    goArticle = () =>{
        this.props.history.push({
            pathname:'/article/11/null',
        })
    }
    render(){
        var s = 'sss'
        return (
            <Router>
                <div className="events">
                <p>{this.state.title}</p>
                <br/>
                <p>这里是events 组件---{s}</p>
                <button onClick={this.goArticle}>JS 跳转</button>
                <button data-u={s} onClick={this.run}>事件对象</button>
                <br/>
                <h2>表单事件</h2>
                <input value={this.state.v} onChange={this.inputChange} />
                <button onClick={this.getInputValue}>点击按钮获取input的值</button>
                <hr/><br/>
                <hr/><br/>

                <Link to='/events/A'>go A</Link>
                <Link to='/events/B'>go B</Link>
                
                <Route path="/events/A" component={A} />
                <Route path="/events/B" component={B} />
            </div>
            </Router>
        )
    }
}
export default Events