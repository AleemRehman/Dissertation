import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import CreateCampaign from './components/campaign/createCampaign'
import SideBar from './components/sidebar/sidebar'
import SignIn from './components/auth/signIn'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <SideBar />
          <div className="main-panel">
            <div className="App">
              <NavBar />
              <Switch>
                <Route exact path='/'component={Dashboard} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/create' component={CreateCampaign} />
                <Route path='/signin' component={SignIn} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const reRoute = (props) => {
  const {auth} = props;
  if(auth.uid){

  }else{
    
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default App;
