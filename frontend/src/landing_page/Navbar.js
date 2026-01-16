import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container ">
      <nav class="navbar navbar-expand-lg border-bottom fixed-top mb-5" style={{backgroundColor:"#FFF"}}>
        <div class="container-fluid ">
          <Link class="navbar-brand px-5 mx-3" to='/' >
           <img src='media/images/logo.svg' alt="logo" style={{width:"25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-2">
                <Link class="nav-link active nav-link link-primary-hover" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link active" aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link active" aria-current="page" to="/pricing">
                  Pricing 
                </Link>
              </li>
              <li class="nav-item px-2">
                <Link class="nav-link active" aria-current="page" to="/support">
                  Support
                </Link>

              
              </li>
              <li><i class="fa fa-bars fs-4 m-2 px-2" aria-hidden="true"></i>
</li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
