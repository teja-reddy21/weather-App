import { useReducer } from "react"

export default function User(){

 const   initialState={count:0}
function  reducer(state,action){
    switch (action.type) {
        case 'increment':
            return({ count: state.count + 1 })
            case 'decrement':
                return({count: state.count -1})
                case 'reverce':
                    return({count: state.count = 0})
          
        default:
            return state
    }
}

    const[state,dispatch]=useReducer(reducer,initialState)

    return (
        <div>
            {state.count}
<button onClick={()=>{dispatch({type: 'increment'})}}>+</button>
<button onClick={()=>{dispatch({type: 'decrement'})}}>-</button>
<button onClick={()=>{dispatch({type: 'reverce'})}}>_</button>
        </div>
    )
}