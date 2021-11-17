<template>
  <div class="todo-footer" v-show="totalAll">
		<label>
			<!-- <input type="checkbox" @change='isAll' :checked='totalChecked'/> -->
			<input type="checkbox" v-model="totalChecked"/>
		</label>
		<span>
			<span>已完成{{totalDone}}</span> / 全部{{totalAll}}
		</span>
		<button class="btn btn-danger" @click='clearTodo' >清除已完成任务</button>
	</div>
</template>
<script>
/**
 * <input type="checkbox" v-model="totalChecked"/>
 * 为什么可以使用 v-model 绑定 是否全选
 * 1、我们在此处进行了 是否全选的初始化渲染  还对数据进行了交互
 * 2、v-model 并没有修改 props 配置项 里面的 数据  修改的是 我们自己添加的计算属性
 * 3、因为涉及到计算属性的修改 计算属性不能简写 要书写完成形式  配置 getter  和 setter 函数
 */
export default {
    name:'TodoFooter',
     data(){
        return{		
				
        }
    },
	props:['todos','ChangeDone','ClearDone'],
	computed:{
		totalDone(){
			return	this.todos.reduce((pre,current)=>{
				return pre + (current.done ? 1 : 0)
			},0)
		},
		totalAll(){
			return this.todos.length
		},
		totalChecked:{
			get(){  //geter函数当数据被读取的时候就会调用 
				return this.totalDone === this.totalAll && this.totalAll > 0 ? true : false  
			},
			// 因为input是一个CheckBox 所以默认的value值时 是否选中的 true or false
			// 此时的value  就是 checked 的值
			set(value){
					this.ChangeDone(value)
			}
		}
	},
	methods:{
		// isAll(e){
		// 	this.ChangeDone(e.target.checked)
		// }
		clearTodo(e){
			if(confirm('确定要删除吗？')){
				this.ClearDone()
			}
		}
	}
}
</script>

<style scoped>
/*footer*/
	.todo-footer {
		height: 40px;
		line-height: 40px;
		padding-left: 6px;
		margin-top: 5px;
	}

	.todo-footer label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;
	}

	.todo-footer label input {
		position: relative;
		top: -1px;
		vertical-align: middle;
		margin-right: 5px;
	}

	.todo-footer button {
		float: right;
		margin-top: 5px;
	}
</style>