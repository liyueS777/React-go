import React from 'react';
class B extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'我是B'
         };
    }
    render() {
        return (
            <div>我是b</div>
        );
    }
}

export default B;