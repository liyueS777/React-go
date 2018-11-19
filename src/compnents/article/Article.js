import React from 'react';
import { Link } from 'react-router-dom'
import URL, { Url } from "url";
class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"我是article的标题",
            html:"<div>888</div>",
            num:1
         };
    }

    add = (n) => {
        console.log(this.state.num)
        this.setState({
            num:n
        })
    }
    goIndex = () => {
        this.props.history.push({
            pathname:'/',
            query:{
                id:1,
                articleId:21
            }
        })
    }
    componentDidMount(){
        console.log('dom加载完毕',this.props.match)
    }
    componentWillMount(){
        console.log('dom还未加载',this.props,this.props.match)
        console.log(URL.parse(this.props.location.search,true).query)
    }
    render() {
        return (
            <div className="article">
                {this.state.title}
                <button><Link to="/">跳转到首页</Link></button>
                <button onClick={this.goIndex}>JS跳转到首页</button>
                <div dangerouslySetInnerHTML={{__html:this.state.html}}></div>
                <input readOnly value={this.state.num} />
                <button onClick={this.add.bind(this,++this.state.num)}>++</button>
            </div>
        );
    }
}

export default Article;