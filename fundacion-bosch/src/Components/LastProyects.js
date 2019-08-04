import React, { Component } from "react";
import "./Style.css/lastProyects.css";
import ProyectCards from "./ProyectCards";


class LastProyects extends Component {


render(){
    return(
    <div className= "mainProyect">
        <div className= "textProyects">
            <h1>Últimos proyectos</h1>
            <div className="row justify-content-center">
                <p className= "col-sm-12 col-md-8 col-lg-8">Conoce más sobre los últimos proyectos donde hemos participado para mejorar la calidad de vida de los estudiantes en México</p>
            </div>
        </div>
        <div className= "row justify-content-center">
            <div className= "btnCard1">&lt;</div>
            <div className= "proyectCards col-md-8 col-sm-12 col-lg-8">
                <ProyectCards />
                <ProyectCards />
                <ProyectCards />
                <ProyectCards />
                <ProyectCards />
                <ProyectCards />
            </div>
            <div className="btnCard2">&gt;</div>
        </div>
    </div>

    );
}

}

export default LastProyects;