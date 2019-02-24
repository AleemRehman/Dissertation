import React, { Component } from 'react'
import { connect} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideBar from './components/sidebar/sidebar'
import MainApplication from './components/layout/mainApplication'
import LoginApplication from './components/layout/loginApplication'

class App extends Component {
  render() {
    const { auth } = this.props;
    let navSide = auth.uid ? <SideBar /> : '';
    let mainApp = auth.uid ? <MainApplication /> : '';
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/(signin)' component={LoginApplication}/>
            <Route path='/signup' component={LoginApplication}/>
            <Route path='/dashboard' component={MainApplication}/>
            <Route path='/' component={MainApplication}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App)