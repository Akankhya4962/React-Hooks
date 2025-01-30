import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type){
        case 'Fetch_success':
            return{
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'Fetch_Error':
            return{
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

const DataFetchReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({type: 'Fetch_success', payload: res.data})
                console.log("res", res);
            })
            .catch(err => {
                dispatch({type: 'Fetch_Error', payload: {}})
            })
    }, [])


  return (
    <div>
        <h2 style={{ color: "purple" }}>
        <u>Data Fetching using useReducer and useEffect Hook</u>
      </h2>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? 'error' : null}
    </div>
  )
}

export default DataFetchReducer
