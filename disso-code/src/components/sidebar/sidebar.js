import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="grey">
	    		<div className="sidebar-wrapper">
		            <div className="logo">
		            	<a href="#" className="simple-text">
		                	socialDash
		            	</a>
		            </div>
		            <ul className="nav">
		            <li>
		            	 <NavLink to="/dashboard" activeClassName="active"><i className="pe-7s-graph" />Dashboard</NavLink>
		            </li>
					<li>
		            	<NavLink to="/createcampaign"  activeClassName="active"><i className="pe-7s-user" />Create Campaign</NavLink>
		            </li>
		            </ul>
	        	</div>
        	</div>
        );
    }
}

export default SideBar;
