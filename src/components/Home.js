import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        console.log('home:',this.props)
    }
    render() {
        return (
            <div>这里是Home组件</div>
        );
    }
}

export default Home;