import React, { Component } from 'react';
import { Link } from "react-scroll";

class NavComponent extends Component {
    
    
    
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">

               <Link class="navbar-brand js-scroll-trigger"
                activeClass="active"
                to="page-top"
                spy={false}
                smooth={true}
                offset={-100}
                duration={500}
              >
               Start Bootstrap
              </Link> 
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>   
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                   
                    
            <li class="nav-item mx-0 mx-lg-1">
               <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                activeClass="active"
                to="portfolio"
                spy={false}
                smooth={true}
                offset={-100}
                duration={500}
              >
               portfolio
              </Link>

              </li>
            <li class="nav-item mx-0 mx-lg-1">
               <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                activeClass="active"
                to="about"
                spy={false}
                smooth={true}
                offset={-100}
                duration={500}
              >
               About
              </Link>
              </li>
            <li class="nav-item mx-0 mx-lg-1">
               <Link class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                activeClass="active"
                to="contact"
                spy={false}
                smooth={true}
                offset={-100}
                duration={500}
              >
               Contact
              </Link>
              </li>

                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default NavComponent;