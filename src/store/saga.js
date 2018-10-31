import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// redux-saga 可以将异步action提取出来单独管理

function* getInitItem(){
    try {
       const res = yield axios.get('/list.json')
       const action = {
           type: 'init_todo_item',
           value: res.data
       } 
       yield put(action)
    } catch (error) {
        console.log(error)
    }
}


function* mySaga(){
    yield takeEvery('init_todo_item',getInitItem)
}

export default mySaga