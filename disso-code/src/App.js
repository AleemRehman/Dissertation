import React, { Component } from 'react';
import NavBar from './components/layout/navbar';
import SideBar from './components/sidebar/sidebar'
import Footer from './components/layout/footer'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <div className="main-panel">
          <NavBar />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
