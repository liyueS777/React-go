import React from 'react';
// import PropTypes from 'prop-types'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:123
        };
    }
    componentDidMount(){
        console.log(this.props.toDo)
        this.props.toDo.delete(1)
    }
    handleData = () =>{
        this.props.handleChildToFather(++this.state.title)
    }
    render() {
        return (
            <div className="header">
                <p>{this.props.title}</p>
                <p>{this.props.data}</p>
                <button onClick={this.props.run}>调用父组件的run方法</button>
                <hr/>
                <button onClick={this.handleData}>子给父通过事件传递数据</button>
            </div>

        );
    }
}
Header.defaultProps = {
    title:"我是默认的子组件的标题",
    data:"我还有i一个"
}
// Header.PropTypes = {
//     title:PropTypes.string,
//     data:PropTypes.number
// }
export default Header;