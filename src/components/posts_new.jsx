import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'


class PostsNew extends Component {

  renderField(field){
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input className='form-control' type='text' {...field.input} />
      </div>
    ) 
  }

  render(){
    return (
      <div>
        <h3>Write a new post</h3>
        <form>
          <Field name='title' label='Title' component={this.renderField}/>
          <Field name='tags' label='Tags' component={this.renderField}/>
          <Field name='post-content' label='Content' component={this.renderField}/>
        </form>
      </div>
    ) 
  }
}

export default reduxForm({form: 'PostsNewForm'})(PostsNew)