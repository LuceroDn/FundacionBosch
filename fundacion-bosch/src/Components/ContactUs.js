import React, { Component } from "react";
import "./Style.css/contactUs.css";
import celIcon from './resources/celIcon.png';
import mapIcon from './resources/mapIcon.png';

class ContactUs extends Component {

render (){
    return(
        <div className="contactSection">
            <div className= "contactTitle">
                <h1>
                Contáctanos 
                </h1>
            </div>
            <div className= "subTitleContact">
                <p>¿Tienes alguna duda o comentario? Ponte en contacto y te ayudaremos a resolver todas tus <br></br> dudas y preguntas.</p>
            </div>
            <div className= "row justify-content-center">
                <div className= "row col-md-8 col-sm-12 col-lg-8">
                    <form className= "col-md-6 col-sm-12 col-lg-6 formContact">
                        <input className="formInput" placeholder="Nombre"></input>
                        <input className="formInput" placeholder="Correo Electrónico"></input>
                        <textarea className="formInputTxt" placeholder="Tu mensaje" rows="10" cols="80" ></textarea>
                        <button className= "formBtn">ENVIAR</button>
                    </form>
                    <div className="col-md-6 col-sm-12 col-lg-6 contactInfoTxt">
                        <div className="row">
                            <div className="col-md-1 col-sm-1 col-lg-1" >
                                <img alt= "donation" src={celIcon} />
                            </div>
                            <div className= "col-md-11 col-sm-11 col-lg-11">
                                Dirección Guillermo González Camarena #333 <br></br>
                                Col.Centro de Cuidad Santa Fe <br></br>
                                Ciudad de México. C.P. 01210 <br></br>
                                <br></br>  
                            </div>
                        </div>
                    <div className="row">
                            <div className="col-md-1 col-sm-1 col-lg-1" >
                                <img alt= "donation" src={mapIcon} />
                            </div>
                            <div className="col-md-11 col-sm-11 col-lg-11">
                                (044)-55-48-97-54-06
                            </div>
                        </div>  
                        <div className="contactMail">
                            O Escribenos a: <br></br>
                            <p className="mailColor">contacto@fundacionboschmexico.org </p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
      
        
    );
}

}

export default ContactUs;