import React, { Component, Fragment } from 'react'
import store from '../store/store'

class TodoList extends Component{

    constructor(...args){
        super(...args)
        //1 从仓库中 获取初始数据
        this.state = store.getState()

        //2 订阅store,当store数据更新，触发回调函数
        store.subscribe(()=>{
            this.setState(()=>{
                //debugger
                console.log(store.getState())
                return store.getState()
            })
        })

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    render(){
        return (
            <Fragment>
                <input type="text" value={this.state.initVal} onChange={this.handleInputChange}/>
                <button onClick={this.handleBtnClick}>add</button>
                <ul>
                    {
                        this.state.list.map((n,i,arr) => {
                            return <li key={i} index={i} onClick={this.handleItemClick}>{n}</li>
                        })
                    }
                </ul>
            </Fragment>
            
        )
    }

    handleInputChange(e){
        const value = e.target.value
        const action = {
            type: 'input_val_change',
            value: value
        }
        store.dispatch(action)
    }

    handleBtnClick(){
        const action = {
            type: 'add_new_item',
            value: this.state.initVal
        }
        store.dispatch(action)
    }

    handleItemClick(e){
        const action = {
            type: 'delete_by_index',
            value: e.target.getAttribute('index')
        }
        store.dispatch(action)
    }
}

export default TodoList