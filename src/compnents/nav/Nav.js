import React from 'react'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navTitle:'123'
         };
    }
    render() {
        return (
            <div className="nav">
                <p>这里是NAV</p>
            </div>
        );
    }
}

export default Nav;