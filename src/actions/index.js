import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'

const ROOT_API = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=UNIQUE987'

export function fetchPosts(){
  const request = axios.get(`${ROOT_API}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(post, cb){
  const request = axios.post(`${ROOT_API}/posts${API_KEY}`, post)
    .then(() => cb())
  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_API}/posts/${id}${API_KEY}`)
  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, cb){
  const request = axios.delete(`${ROOT_API}/posts/${id}${API_KEY}`)
    .then(() => cb())
  return {
    type: DELETE_POST,
    payload: request
  }
}