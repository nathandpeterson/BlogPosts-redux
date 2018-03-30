import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createPost } from '../actions'


class PostsNew extends Component {

  renderField(field){
    const { meta : { touched, error }, label, input } = field
    const errorClass = `form-group ${touched && error ? 'has-danger': ''}`
    return (
      <div className={errorClass}>
        <label>{label}</label>
        <input className='form-control' type='text' {...input} />
        <div className='form-control-feedback'>
          {touched ? error : ''}
        </div>
      </div>
    ) 
  }

  onSubmit(values){
    this.props.createPost(values)
  }

  render(){
    const { handleSubmit } = this.props
    return (
      <div>
        <h3>Write a new post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name='title' label='Title' component={this.renderField}/>
          <Field name='categories' label='Categories' component={this.renderField}/>
          <Field name='content' label='Content' component={this.renderField}/>
          <button className='btn btn-primary' type='submit'>Submit</button>
          <Link to='/' className='btn btn-danger'>Cancel</Link>
        </form>
      </div>
    ) 
  }
}

function validate(values){
  const errors = {}
  if(!values.title) { errors.title = 'Enter a title.'}
  if(!values.categories) { errors.categories = 'Enter a category.'}
  if(!values.content) { errors.content = 'Enter some content.'}
  return errors
}

export default reduxForm({validate, form: 'PostsNewForm'})(
      connect(null, { createPost } )(PostsNew) )