import React, { Component } from 'react';
import './Style/Helping.css';
import imgHelping from "./img/Image 11@2x.png";
import website from './img/website.png'
import skills from './img/skills.png';
import mortarboard from './img/mortarboard.png';
import blueprint from './img/blueprint.png';


class Helping extends Component {
    render(){
        return(
            <div className="container-fluid backgroundHelping">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-5" >
                    <img className="imgHelp" src={imgHelping} alt="helping" />
                    </div>
                    
                    <div className="col-sm-12 col-md-7 textBox">
                    <div>
                        <h1 className="titleHelping col-md-10">¿Cómo ayudamos?</h1>
                    </div>

                    <div>
                        <p className="textHelping col-md-10 offset-md-2">
                        Fundación Bosch está enfocada en beneficiar a niños y&nbsp;
              <br />
              jóvenes de zonas desfavorecidas social y económicamente, a&nbsp;
              <br />
              través de proyectos educativos en Organizaciones No&nbsp;
              <br />
              Gubernamentales y Centros Escolares del ámbito público&nbsp;
              <br />
              (nivel básico, medio superior y superior).
                        </p>
                    </div>

            <div className="row-sm-6 offset-sm-3 icons">
                <div className="iconsM col-sm-3">
                <img src={blueprint} alt="website" />
                </div>

                <div className="iconsM col-sm-3">
                <img src={website} alt="website" />
                </div>
            </div>
            
            <div className="row-sm-6 offset-sm-3 icons">
                <div className="iconsM col-sm-3">
                <img src={skills} alt="website" />
                </div>
                
                <div className="iconsM col-sm-3">
                <img src={mortarboard} alt="website" />
                </div>
            </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Helping;