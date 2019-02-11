import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
		            <li className="active">
		            	 <Link to="/dashboard"><i className="pe-7s-graph" />Dashboard</Link>
		            </li>
					<li>
		            	<Link to="/create"><i className="pe-7s-user" />Create Campaign</Link>
		            </li>
		            </ul>
	        	</div>
        	</div>
        );
    }
}

export default SideBar;
