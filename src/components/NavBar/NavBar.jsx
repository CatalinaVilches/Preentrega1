import React from 'react'
import './navbar.css';
import CartWidget from './CartWidget';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} alt="Logo" style={{ height: '40px' }} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Pasteles</a>
        <a className="nav-link" href="#">Galletas</a>
        <a className="nav-link" href="#">Cupcakes</a>
      </div>
    </div>
  </div>
<CartWidget />
</nav>
  )
}

export default Navbar