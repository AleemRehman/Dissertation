import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import CreateCampaign from './components/campaign/CreateCampaign'
import SideBar from './components/sidebar/sidebar'

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
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
