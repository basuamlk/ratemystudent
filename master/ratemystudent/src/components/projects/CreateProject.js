import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


class CreateProject extends Component {//where we will create new students
  state = {
    name: '',
    info: '',
    class: '',
    photo: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {//displays the form to get information regarding students
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add a New Student</h5>
          <div className="input-field">
            <input type="text" id='name' onChange={this.handleChange} />
            <label htmlFor="name">Student Name</label>
          </div>
          <div className="input-field">
            <textarea id="class" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="class">Class Taught to Student</label>
          </div>
          <div className="input-field">
            <textarea id="info" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="info">Information About the Student</label>
          </div>   
          <div className="input-field">
            <button className="btn red lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)