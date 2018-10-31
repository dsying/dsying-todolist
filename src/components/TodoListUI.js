import React, { Component, Fragment } from 'react'


const TodoListUI = (props) => {

        return (
            <Fragment>
                <input type="text" value={props.initVal} onChange={props.handleInputChange}/>
                <button onClick={props.handleBtnClick}>add</button>
                <ul>
                    {
                        props.list.map((n,i,arr) => {
                            return <li key={i} index={i} onClick={props.handleItemClick}>{n}</li>
                        })
                    }
                </ul>
            </Fragment>
            
        )
}

export default TodoListUI