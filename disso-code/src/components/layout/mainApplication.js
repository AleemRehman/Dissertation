import React, { Component } from 'react'
import { connect} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from '../layout/navbar'
import Dashboard from '../dashboard/dashboard'
import CreateCampaign from '../campaign/createCampaign'
import SideBar from '../sidebar/sidebar'
import SignIn from '../auth/signIn'
import SignUp from '../auth/signUp'


class MainApplication extends Component {
  render() {
    const { auth } = this.props;
    let navSide = auth.uid ? <SideBar /> : '';
    let navHeader = auth.uid ? <NavBar /> : '';
    return (
      <div className="wrapper">
        {navSide}
          <div className="main-panel">
            <div className="App">
              {navHeader}
              <Route exact path='/'component={Dashboard} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/createcampaign' component={CreateCampaign} />
            </div>
          </div>
      </div>

    )
  }
}



const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(MainApplication)