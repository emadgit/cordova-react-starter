import {FETCH_POSTS,NEW_POST} from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch =>{
    console.log("Dispatched")
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((result)=>{
        dispatch({
            type:FETCH_POSTS,
            payload: result.data
        })
      })
}
export const newPost = (post) => dispatch =>{
    axios.post("https://jsonplaceholder.typicode.com/posts", post).then((result)=>{
        dispatch({
            type:NEW_POST,
            payload: result.data
        })
    })
}