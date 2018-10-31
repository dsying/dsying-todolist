
const initState = {
    initVal: 'xxx',
    list: [1,2,3,4]
}
function reducer(prevState=initState,action){
    switch(action.type){
        case 'input_val_change':
            return Object.assign({},prevState,{
                initVal: action.value
            })
        case 'add_new_item':
            return Object.assign({},prevState,{
                initVal: '',
                list: [...prevState.list,action.value]
            })
        case 'delete_by_index':
            debugger
            const list = JSON.parse(JSON.stringify(prevState.list))
            list.splice(action.value,1)
            return Object.assign({},prevState,{
                list
            })
        default:
            return prevState
    }
}

export default reducer