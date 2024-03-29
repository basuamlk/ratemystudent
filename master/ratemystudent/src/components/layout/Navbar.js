import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import Media from 'react-media';

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;//display which links should be accessable based off if a user is logged in or not

  return (//display the navigation bar 
    <nav className="nav-wrapper grey darken-3">
      <div className="container"><Media query="(max-width: 823px)">
          {matches =>
            matches ? (
              <Link to='/' className="brand-logo"></Link>
            ) : (
              <Link to='/' className="brand-logo">Rate My Student</Link>
            )
          }
        </Media>
        
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)