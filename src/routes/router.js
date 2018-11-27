import asyncComponent from '../components/common/AsyncComponent'

// import Article from '../components/Article'
// import Home from '../components/Home'
// import News from '../components/News'

// import User from '../components/user/User'
// import UserAdd from '../components/user/UserAdd'
// import UserList from '../components/user/UserList'
// import UserDetail from '../components/user/UserDetail'
// import Error from '../components/Error'

const Article=asyncComponent(()=>import(/* webpackChunkName: "Article" */"../components/Article"))
const Home=asyncComponent(()=>import(/* webpackChunkName: "Home" */"../components/Home"))
const News=asyncComponent(()=>import(/* webpackChunkName: "News" */"../components/News"))
const User=asyncComponent(()=>import(/* webpackChunkName: "User" */"../components/user/User"))
const UserAdd=asyncComponent(()=>import(/* webpackChunkName: "UserAdd" */"../components/user/UserAdd"))
const UserList=asyncComponent(()=>import(/* webpackChunkName: "UserList" */"../components/user/UserList"))
const UserDetail=asyncComponent(()=>import(/* webpackChunkName: "UserDetail" */"../components/user/UserDetail"))
const routes = [
    {
        path:'/',
        component:Home,
        exact:true,
        meta:{
            title:'Home'
        }
    },
    {
        path:'/home',
        component:Home,
        exact:true,
        meta:{
            title:'Home'
        }
    },
    {
        path:'/news',
        component:News,
        meta:{
            title:'New'
        }
    },
    {
        path:'/article',
        component:Article,
        meta:{
            title:'Article'
        }
    },
    {
        path:'/user',
        component:User,
        meta:{
            title:'User'
        },
        routes:[
            {
                path:'/user/',
                component:UserList,
                meta:{
                    title:'UserList'
                }
            },
            {
                path:'/user/userAdd',
                component:UserAdd,
                meta:{
                    title:'userAdd'
                }
            },
            {
                path:'/user/userDetail',
                component:UserDetail,
                meta:{
                    title:'userDetail'
                }
            }
        ]
    }
]
 export default routes