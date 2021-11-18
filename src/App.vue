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
				<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
				<!-- <Children :GetName='GetName'/> -->

				<!-- 通过自定义一个事件 给子组件绑定一个事件 v-on @ -->
				<!-- <Children v-on:ati='GetName'/> -->
				
				<!-- 通过自定义给子组件绑定一个引用信息 ref   -->
				<Children ref="ati" @OffDown='OffDown'/>
			</div>
		</div>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import Children from './components/Children.vue'


export default {
    name:'App',
	// 为什么要是用深度监视 因为vue虽然提供了监视数组和对象的方法 但是浅度监视检测不到对象内部数据的变化 
	// 所以要使用深度监视 所以不能使用间歇性是 使用完整写法 添加 deep:true
    data(){
        return{
			todos: JSON.parse(localStorage.getItem('todos'))||[]
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
		},
		GetName(name){
			console.log('我被调用了而且收到了参数',name);
		},
		OffDown(value){
			value.$off('ati')
		}
	},
    components:{
        TodoHeader,
        TodoList,
        TodoFooter,
		Children    
    },
	watch:{
		todos:{
			deep:true,
			handler(newValue,oldValue){
				localStorage.setItem('todos',JSON.stringify(newValue))
			}
		}
	},
	mounted(){
		// this.$refs.ati  亲自拿到了VC实例对象 并且绑定了一个ati 事件 this.GetName为事件处理函数
		this.$refs.ati.$once('ati',this.GetName)
	}
	
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