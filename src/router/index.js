// 引入 Vue-Router  创建整个应用的路由
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


export default new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'news',
                    component: News,
                    children: [{
                        path: 'detail/:id/:title',
                        component: Detail
                    }]
                },
                {
                    path: 'message',
                    component: Message,
                    children: [{
                        path: 'detail',
                        component: Detail
                    }]
                },
            ]
        },
    ]
})