import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<h4 className="nav-link"><Link to="/home">Home</Link></h4>
			<h4 className="nav-link"><Link to="/about">About</Link></h4>
			<h4 className="nav-link"><Link to="/contact">Contact</Link></h4>
		</div>
	)
}

export default Navbar;