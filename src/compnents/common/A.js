import React from 'react';
class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'woshi A'
         };
    }
    render() {
        return (
            <div>{this.state.title}</div>
        );
    }
}

export default A;