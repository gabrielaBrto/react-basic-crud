import './Logo.css'
import React from 'react'
// import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom'

export default props => 
<aside className="logo">
    <Link to="/">
         {/* <img src={logo} alt="logo"/> */}
        <span className="Logo"><i className="fa fa-user"></i> Usuarios</span>
    </Link>
</aside>