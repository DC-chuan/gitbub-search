<template>
   <div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<TodoHeader :recieve='recieve'/>
				<TodoList :todos='todos' 
				:changechecked='changechecked'
				:DelItem='DelItem'
				/>
				<TodoFooter :todos='todos' 
				:ChangeDone='ChangeDone'
				:ClearDone='ClearDone'
				/>
			</div>
		</div>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
    name:'App',
    data(){
        return{
			todos:[
				{id:'001',event:'吃饭',done:true},
				{id:'002',event:'睡觉',done:false},
				{id:'003',event:'打豆豆',done:false}
			]
        }
    },
	methods:{
		// 收到header的输入数据
		recieve(arr){			
			this.todos.unshift(arr)
		},
		// 根据ID值找到checked
		changechecked(id){
			this.todos.forEach(item=>{
				if(item.id===id) item.done = !item.done
			})
		},
		// 根据ID值删除item
		DelItem(id){
			const index = this.todos.findIndex(item=> item.id === id)
			this.todos.splice(index,1)
		},
		// 根据全选按钮更改完成状态
		ChangeDone(value){			
			 this.todos.forEach(item => item.done = value)
		},
		// 清除已完成的任务
		ClearDone(){
			this.todos =this.todos.filter(item=>item.done != true)
		}
	},
    components:{
        TodoHeader,
        TodoList,
        TodoFooter    
    },
	
	
}
</script>

<style>
/*base*/
	body {
		background: #fff;
	}
	.btn {
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		text-align: center;
		vertical-align: middle;
		cursor: pointer;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
		border-radius: 4px;
	}
	.btn-danger {
		color: #fff;
		background-color: #da4f49;
		border: 1px solid #bd362f;
	}
	.btn-danger:hover {
		color: #fff;
		background-color: #bd362f;
	}
	.btn:focus {
		outline: none;
	}
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}
	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>