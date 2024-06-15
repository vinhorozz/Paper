// src/components/NavBar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
      
     <a className="navbar-brand" href="/">E-Commerce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  
        <span className="navbar-toggler-icon"></span>
      </button>




      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                        <a className="nav-link" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="/produtos">Produtos</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                </li>
                        </ul>


        <form className="form-inline ml-auto my-2 my-lg-">                  
          <input className="form-control mr-sm-2" type="search" placeholder="Pesquise" aria-label="Search" />                
        </form>    
        <button className="btn btn-outline my-2 my-sm-2" type="submit">Pesquisar</button>
      </div>
    </nav>

  );
};

export default NavBar;
