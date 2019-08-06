import React, { Component } from "react";
import "./Style/NavBar.css";
import {Link} from "react-router-dom";
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
       <a class="nav-link home" href="#home">HOME<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#quienes-somos">¿QUIÉNES SOMOS?</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#ultimos-proyectos">PROYECTOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contacto">CONTACTO</a>
      </li>
    </ul>
  </div>
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="BRWS5HWYR4G7N" />
<input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donar con el botón PayPal" />
<img alt="" border="0" src="https://www.paypal.com/es_MX/i/scr/pixel.gif" width="1" height="1" />
</form>

</nav>
  
  </header>
    );
  }
}


export default NavBar;
