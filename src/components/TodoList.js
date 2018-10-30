import React, { Component, Fragment } from 'react'


class TodoList extends Component{

    constructor(...args){
        super(...args)
        this.state = {
            initVal: 'xxx',
            list: [1,2,3,4]
        }
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
        this.setState((prevState)=>{
            return {
                initVal: value
            }
        })
    }

    handleBtnClick(){
        this.setState((prevState)=>{
            return {
                initVal: '',
                list: [...prevState.list,prevState.initVal]
            }
        })
    }

    handleItemClick(e){
        const index = e.target.getAttribute('index')
        
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1)
            return {list}
        })
    }
}

export default TodoList