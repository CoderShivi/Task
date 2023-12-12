const initialState={
    task:{}
}
export default function RootReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_TASK':
            action.payload[0].map((item)=>{
                state.task[item.id]=item })
            console.log(state.task)
            return({task:state.task})
        case 'DEL_TASK':
            delete state.task[action.payload[0]]
            return ({task:state.task})
        default:
            return(state)
    }
}