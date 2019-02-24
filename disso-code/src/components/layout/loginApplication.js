import React, { Component } from 'react'
import { connect} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideBar from '../sidebar/sidebar'
import SignIn from '../auth/signIn'
import SignUp from '../auth/signUp'

class LoginApplication extends Component {
  render() {
    return (
        <div className="wrapper">
            <Route exact path='/' component={SignIn} />
            <Route path='/signIn' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(LoginApplication)