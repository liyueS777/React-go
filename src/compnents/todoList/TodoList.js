import React from 'react';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            username:'123',
            c:"change"
         };
    }

    inputChange = (e) =>{

        this.setState({
            username:e.target.value
        })

    }
    changeV = (p) => {
        console.log(p)
        this.setState({
            username:p
        })
    }
    render() {
        return (
            <div className="todoList">
                <p>TodoList</p>
                <p>default 是初始值，不会被state改变，如果是value就能够双向结合</p>
                <input value={this.state.username} onChange={this.inputChange} />
                <p>{this.state.username}</p>
                <button onClick={this.changeV.bind(this,this.state.c)}>改变username</button>
            </div>
        );
    }
}

export default TodoList;