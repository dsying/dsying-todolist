//import React, { Component } from 'react'
//import store from '../store/store'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'

// Map Redux state to component props
function mapStateToProps(state){
    return {
        initVal: state.initVal,
        list: state.list
    }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch){
    return {

        handleInputChange:(e)=>{
            const value = e.target.value
            const action = {
                type: 'input_val_change',
                value: value
            }
            dispatch(action)
        },
        
        handleBtnClick:()=>{
            const action = {
                type: 'add_new_item'
            }
            dispatch(action)
        },
        
        handleItemClick:(e)=>{
            const action = {
                type: 'delete_by_index',
                value: e.target.getAttribute('index')
            }
            dispatch(action)
        }
    }
}

const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoListUI);

export default TodoList


// class TodoList extends Component{

//     constructor(...args){
//         super(...args)
//         //1 从仓库中 获取初始数据
//         this.state = store.getState()

//         //2 订阅store,当store数据更新，触发回调函数
//         store.subscribe(()=>{
//             this.setState(()=>{
//                 //debugger
//                 console.log(store.getState())
//                 return store.getState()
//             })
//         })

//         this.handleInputChange = this.handleInputChange.bind(this)
//         this.handleBtnClick = this.handleBtnClick.bind(this)
//         this.handleItemClick = this.handleItemClick.bind(this)
//     }

//     render(){
//         return <TodoListUI 
//             initVal={this.state.initVal}
//             handleInputChange={this.handleInputChange}
//             handleBtnClick={this.handleBtnClick}
//             list={this.state.list}
//             handleItemClick={this.handleItemClick}/>
//     }

//     handleInputChange(e){
//         const value = e.target.value
//         const action = {
//             type: 'input_val_change',
//             value: value
//         }
//         store.dispatch(action)
//     }

//     handleBtnClick(){
//         const action = {
//             type: 'add_new_item',
//             value: this.state.initVal
//         }
//         store.dispatch(action)
//     }

//     handleItemClick(e){
//         const action = {
//             type: 'delete_by_index',
//             value: e.target.getAttribute('index')
//         }
//         store.dispatch(action)
//     }
// }

