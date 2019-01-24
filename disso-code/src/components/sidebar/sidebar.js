import React, { Component } from 'react';
import { Link } from 'react-router';

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
	    		<div className="sidebar-wrapper">
		            <div className="logo">
		            	<a href="http://www.creative-tim.com" className="simple-text">
		                	Creative Tim
		            	</a>
		            </div>
		            <ul className="nav">
		            <li className="active">
		            	 <Link to="/dashboard"><i className="pe-7s-graph" />Dashboard</Link>
		            </li>
		            </ul>
	        	</div>
        	</div>
        );
    }
}

export default SideBar;
