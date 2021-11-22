<template>
   <div>
        <ul>
            <li v-for="n in newsList" :key="n.id">
                <!-- <router-link :to="{
                    path:'/home/news/detail',
                    query:{
                        id : n.id,
                        title: n.title
                    }
                }">{{n.title}}</router-link> -->
                <router-link :to="`/home/news/detail/${n.id}/${n.title}`">{{n.title}}</router-link>
            </li>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
export default {
    name:'News',
    data(){
        return{
            newsList:[
                {id:'001',title:'news001'},
                {id:'002',title:'news002'},
                {id:'003',title:'news003'}
            ]
        }
    }
}
</script>

<style>

</style>