import React, { Component } from "react";
import "./Style/footerApp.css";
import facebookIcon from './resources/facebook.png';
import instagramIcon from './resources/instagram.png';
import twitterIcon from './resources/twitter.png';



class FooterApp extends Component{
    render() {
        return(
            <div className="row col-md-12 col-sm-12 col-lg-12 pageFooter">
                <div className="col-md-4 col-sm-4 col-lg-4 boschName">
                    <h4 className="titleFooter">FUNDACIÓN</h4>  
                    <h5 className="subtitleFooter">Robert Bosch México</h5> 
                    <div className="boschTxt">
                        <p>Proyectos que favorezcan la plena inserción de niños, niñas <br></br>
                        y jóvenes en riesgo de exclusión social a causa de factores <br></br>
                        socioeconómicos, promoviendo la calidad en la educación, <br></br>
                        con la intención de cultivar verdaderos agentes de cambio.
                        </p>
                    </div> 
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 boschName">
                    <h4 className="subtitleFooter">CONTACTÁNOS</h4>  
                    <div className="boschTxt">
                        <p>contacto@fundacionboschmexico.org</p>
                    </div> 
                    <div className="boschTxt">
                        <p> Dirección Guillermo González Camarena #333 <br></br>
                            Col.Centro de Cuidad Santa Fe <br></br>
                            Ciudad de México. C.P. 01210 <br></br>
                        </p>
                    </div>
                    <div className="boschTxt">
                        <p> (044)-55-48-97-54-06 </p>
                    </div>  
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 boschNameA">
                    <h4 className="subtitleFooter">SIGUENOS EN</h4>
                    <div className="socialIcons"> 
                        <img alt="facebook" src= {facebookIcon}></img>
                        <img alt="twitter" src= {twitterIcon}></img>
                        <img alt="facebook" src= {instagramIcon}></img>
                    </div>
                </div>
            </div>
         
        );
    }
}    

export default FooterApp;