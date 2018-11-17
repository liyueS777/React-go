import React from 'react'
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
    render(){
        var s = 'sss'
        return (
            <div className="events">
                <p>{this.state.title}</p>
                <br/>
                <p>这里是events 组件---{s}</p>
                <button data-u={s} onClick={this.run}>事件对象</button>
                <br/>
                <h2>表单事件</h2>
                <input value={this.state.v} onChange={this.inputChange} />
                <button onClick={this.getInputValue}>点击按钮获取input的值</button>
            </div>
        )
    }
}
export default Events