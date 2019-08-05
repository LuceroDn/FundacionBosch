import React, { Component } from "react";
import "./Style.css/NavBar.css";
import {Link} from "react-scroll";
import imgLogo from "./img/Image 3@2x.png";
import imgFRB from './img/imgFRB.webp';


class NavBar extends Component {
  render() {
    return (
     <header>

<nav class="navbar navbar-expand-lg navbar-light bg-white">
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand imgNav1" href="#">
  <img src={imgLogo} className="d-inline-block align-top img1" alt="React Bootstrap logo"/>
  </a>
  <a class="navbar-brand imgNav2" href="#">
  <img src={imgFRB} className="d-inline-block align-top img2" alt="React Bootstrap logo"/>
  </a>  
  
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link home" href="#">HOME<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">¿QUIÉNES SOMOS?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PROYECTOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACTO</a>
      </li>
    </ul>
  </div>
  <button class="btn btn-color my-2 my-sm-0 donate" type="submit">DONAR</button>
</nav>
  
  </header>
    );
  }
}


export default NavBar;
