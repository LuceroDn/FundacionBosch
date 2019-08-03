import React, { Component } from "react";
import "./Style.css/NavBar.css"

class NavBar extends Component {
  render() {
    return (
     <header>
      <ul class="navigation">
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Explora México</a>
  </li>
</ul>


<a href="#navigation" class="nav-trigger">Menu<span></span></a>

<nav class="nav-container" id="navigation">
  <header>
    <h2>Menú</h2>
  </header>

  <ul class="nav">
    <li><a href="https://www.miviajeporelmundo.com/destinos/consejos-para-viajar-mexico">* Toda la información para
        planear tu viaje a México</a></li>
    <li><a href="https://www.miviajeporelmundo.com/reducir-o-eliminar-el-plastico-cuando-viajas">* 8 Formas para reducir
        o eliminar el plastico cuando viajas</a></li>
    <li><a href="https://www.miviajeporelmundo.com/mujeres-que-viajan-solas">* Historias y consejos de mujeres que
        viajan solas por el mundo</a></li>
  </ul>
</nav>
     </header>
    );
  }
}


export default NavBar;
