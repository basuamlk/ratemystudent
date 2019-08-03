import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> //if the user is not signed in redirect them to be signed innnnn

    return (
      <div className="dashboard container">
        <h2>Browse Sudent Profiles</h2>
        <h4>(Click one to view profile)</h4>
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)