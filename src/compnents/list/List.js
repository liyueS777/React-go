import React from 'react';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            name:'default'
         };
    }
    inputChange = () =>{
        console.log(this.refs["username"])
        let v = this.refs["username"].value
        this.setState({
            username:v
            
        })
    }
    getInputValue = () =>{
        console.log(this.state.username)
    }
    inputKeyup = (e) =>{
        console.log(e.target.value)
        this.setState({
            name:e.target.value
        });
        if(e.keyCode==13){
            console.log(111,this.state.name)
            this.getInputKeyup(e.target.value)
        }
    }
    getInputKeyup = (type) => {
        console.log('typee:',type);
    }
    render() {
        return (
            <div className="list">
                <p>我是list组件</p>
                <p>ref 获取</p>
                <input ref="username" value={this.state.username} onChange={this.inputChange} />
                <button onClick={this.getInputValue}>点击按钮获取input的值</button>
                <hr/>
                <input defaultValue={this.state.name} onKeyUp={this.inputKeyup} />
                <button onClick={this.getInputKeyup.bind(this,this.state.name)}>回车拿到input 的值</button>
            </div>   
        )
    }
}

export default List;