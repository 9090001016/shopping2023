import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/main.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Shopping</a>
                <form className="d-flex second_item">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/productdetails">
                        <p>product</p>
                    </NavLink>
                </form>
            </div>
        </nav>
    )
}

export default Navbar