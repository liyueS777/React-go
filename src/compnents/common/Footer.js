import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"我是Footer的state的数据"
         };
    }
    componentDidMount(){
        console.log(this.state.title)
    }

    run = (p) => {
        console.log(p,'我是footer的run方法',this.state.title)
    }
    render() {
        return (
            <div className="footer">{this.state.title}</div>
        );
    }
}

export default Footer;