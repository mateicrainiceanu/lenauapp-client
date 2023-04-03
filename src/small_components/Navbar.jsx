import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import proxy from './Proxy';

function Navbar(props){

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch(proxy + "/api/news/categories").then(response => response.json()).then(data => {
      setCategories(data.categories);
    })
  }, [])

    return (
        <section id="navigation-bar">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand ju" href="/">
          <img alt="logo" src="images/logo-lenau.png" className="d-inline-block align-text-top logo"/>
        </a>
        <a className="nav-link" href="/user">{props.user && <p>{props.user.username}</p>}</a>
        <div className="navbar-content">
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Acasa</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/prezentare-generala">Despre noi</a>
              </li>
        
              <li className="nav-item">
                <Link to='/news:general' className="nav-link" >Noutati</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/NikolausLenau"><i className="fa-brands fa-facebook-f"></i></a>
              </li>
              <li className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mai multe
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to="/conducerea" className="dropdown-item">Management</Link></li>
                  <li><Link to="/legislatie" className="dropdown-item" >Legislație</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  De interes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {categories.map((category, i) => (
                    <li key={i}><Link to={"/redirect:" + category} className="dropdown-item">{category}</Link></li>
                  ))}
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
    
  </section>

    );
}

export default Navbar;