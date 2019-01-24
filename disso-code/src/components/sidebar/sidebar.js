import React, { Component } from 'react';
import { Link } from 'react-router';

class SideBar extends Component{
    render(){
        return(
            <div className="sidebar" data-color="red">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a className="simple-text">
                            socialDash
                        </a>
                    </div>
                    <ul className="nav">
                        <li className="active">
                            <Link to="/dashboard"><i className="pe-7s-graph">Dashboard</i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}