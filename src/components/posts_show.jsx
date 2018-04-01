import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'

class PostsShow extends Component {

  componentDidMount(){
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }

  onDeleteHandler = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render(){
    const { post } = this.props
    if(!post) return <div />
    return (
      <div>
        <Link to='/' className='btn btn-secondary'>
            Back to Index
        </Link>
        <button className='btn btn-danger pull-xs-right'
                onClick={this.onDeleteHandler}>
            Delete post
        </button>
        <h2>{post.title}</h2>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts}, ownProps){
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)