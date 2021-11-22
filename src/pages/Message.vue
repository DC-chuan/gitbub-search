<template>
    <div>
        <ul>
            <li v-for=" m in messageList" :key="m.id">
                <!-- 路由传递 query 参数  字符串写法 使用v-bind -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->

                <!-- 路由传递参数  对象写法 -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id: m.id,
                        title: m.title
                    }
                }">{{m.title}}</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return{
            messageList:[
                {id:'001',title:'消息1'},
                {id:'002',title:'消息2'},
                {id:'003',title:'消息3'}
            ]
        }
    }
}
</script>

<style>

</style>