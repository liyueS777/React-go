import React from 'react';
import { Route,Link} from 'react-router-dom'

import { Layout, Menu, Icon,Switch } from 'antd';
import '../../assets/css/layout/index.css'
const { Header, Sider, Content } = Layout;

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    componentDidMount() {
        console.log(this.props)
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    onChange =(e)=>{
        console.log(e)
    }
    render() {
        return (
            <div className="user">
                <Layout>
                    <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                        <Icon type="user" />
                        <span>
                            <Link to="/user">user</Link>
                            <Switch defaultChecked onChange={this.onChange} />
                        </span>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span><Link to='/user/userAdd'>userAdd</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <Icon type="upload" />
                        <span><Link to='/user/userDetail'>userDetail</Link></span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            />
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <div className="right">
                                {
                                    this.props.routes.map((route,key)=>{
                                        return (
                                            <Route exact key={key} path={route.path} component={route.component} />
                                        )
                                    })
                                }
                            </div>
                        </Content>
                    </Layout>
                </Layout>

                
            </div>
        );
    }
}

export default User;