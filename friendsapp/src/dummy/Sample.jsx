// reducer function
function counterReducer(state, action) {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + action.payload
        }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
      case 'RESET': 
        return {
          count: 0
      } 
    }
  }
  
  export default function Sample() {
    let [state, dispatch] = useReducer(counterReducer, {count:0});
    
    return <div>
        Count: {state.count} <br />
      <button type="button" onClick={() => dispatch({type:'INCREMENT', payload: 10})}> Inc </button>
       <button type="button" onClick={() => dispatch({type:'DECREMENT'})}> DEC </button>
      <button type="button" onClick={() => dispatch({type:'RESET'})}> RESET </button>
   
     </div>
  }