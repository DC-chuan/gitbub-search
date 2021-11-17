<template>
    <div class="todo-header">
		<div class="input-danger" v-show="inputErr">任务名称不能为空哦</div>
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="Tosubmit" v-model.trim="value"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'TodoHeader',
    data(){
        return{
			value:'',
			inputErr:false
        }
    },
	methods:{
		Tosubmit(){
			// 校验数据
			if(!this.value){
				return 	this.inputErr = true	
			}
			const todo ={id:nanoid(),event:this.value,done:false}
			this.recieve(todo)
			this.value=''
		}
		/**
		 * 获取输入框的value值还可以这么做
		 * Tosubmit(event){
		 * 	event.trget.value
		 * }
		 */
	},
	props:['recieve']
}
</script>

<style scoped>
/*header*/
	.todo-header{
		position: relative;
	}
	.input-danger{
		position:absolute;
		background: #88b7d5;
        border: 4px solid #c2e1f5;
		opacity: 0.9;
		right: -165px;
   		top: 5px;
		color: rgb(2, 20, 20);
	}
	.todo-header input {
		width: 560px;
		height: 28px;
		font-size: 14px;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 4px 7px;
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>