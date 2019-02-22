import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import UserAvatar from 'react-user-avatar'

const NavBar = (props) => {
    const {auth} = props;
		return (
			<nav className="navbar navbar-default navbar-fixed">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                  <li>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-dashboard" />
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-globe" />
                      <b className="caret" />
                      <span className="notification">69</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Notification 1</a></li>
                      <li><a href="#">Notification 2</a></li>
                      <li><a href="#">Notification 3</a></li>
                      <li><a href="#">Notification 4</a></li>
                      <li><a href="#">Another notification</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-search" />
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <UserAvatar style={styles} size="45" src={props.auth.photoURL} name={props.auth.displayName}></UserAvatar>
                  </li>
                  <li><a onClick={props.signOut}>Log Out</a></li>
                </ul>
              </div>
            </div>
          </nav>
		);
  }
  
 const styles = {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '25%'
 };

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar)