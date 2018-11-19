import React from 'react';

import Header from '../common/Header'
import Footer from '../common/Footer'
import { getActivity,getLogoHot,getCompany } from '../../utils/api'
class ToDoList2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            childDate:'default',
            title:"todo传世给header数据的title",
            input:'123',
            list:[
                {name:'xiaoA',id:1},
                {name:'xiaoB',id:2},
                {name:'xiaAC',id:3}
            ]
        };
    }
    inputChange = (e) =>{
        this.setState({
            input:this.refs.name.value
        });
    }
    inputKeyUp = (e) =>{
        if(e.keyCode==13){
            this.add()
        }
    }
    add = ()=>{
        if(!this.refs.name.value.trim()){
            alert('泵为空')
            return;
        }
        var tempList = this.state.list;
        tempList.push({name:this.refs.name.value})
        this.setState({
            list:tempList,
            input:''
        });
    }
    delete = (index)=>{
        var tempList = this.state.list
        tempList.splice(index,1);
        this.setState({
            list:tempList
        })
    }
    run = () =>{
        console.log(this.state.list)
    }
    handleChildToFather = (p) =>{
        this.setState({
            childDate:p
        })
    }
    getChildRen = () => {
        console.log(this.refs.Footer.state.title)
        this.refs.Footer.run(1);
    }
    componentDidMount(){
        getLogoHot({
            activityId:1,
            pageNum:1,
            pageSize:2
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="todo">
                <h1>{this.state.childDate}</h1>
                <hr/>
                <Header title={this.state.title} run={this.run} toDo={this} handleChildToFather={this.handleChildToFather} />
                <div>
                    <input ref="name" placeholder="请输入" onChange={this.inputChange} onKeyUp={this.inputKeyUp} value={this.state.input} />--<button onClick={this.add}>整啊家</button>
                    <hr/>
                    <ul>
                        {
                            this.state.list.map( (v,k) => {
                                return (<li key={k}><span>{v.name}---{k}</span>---<button onClick={this.delete.bind(this,k)}>删除</button></li>)
                            })
                        }
                    </ul>
                </div>
                <hr/>
                <button onClick={this.getChildRen}>获取子组件Footer的数据和方法</button>
                <hr/>
                <Footer  ref="Footer" />
            </div>
        );
    }
}

export default ToDoList2;