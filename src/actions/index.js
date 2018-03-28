import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_API = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=UNIQUE987'

export function fetchPosts(){
  const request = axios.get(`${ROOT_API}/posts${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}