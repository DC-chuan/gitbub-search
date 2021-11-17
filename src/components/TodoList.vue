<template>
  	<ul class="todo-main">
		<TodoItem 
		v-for='T in todos' 
		:key="T.id" 
		:TodoArr='T'
		:changechecked='changechecked'
		:DelItem='DelItem'
		/>
	</ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name:'TodoList',
     data(){
        return{
			
        }
     },
     components:{
         TodoItem
     },
	props:['todos','changechecked','DelItem']
}
</script>

<style scoped>
/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>