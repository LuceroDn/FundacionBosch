import React, { Component } from "react";
import "./Style.css/howHelp.css";
import donationIcon from './resources/donation1.png';
import donationBox from './resources/boxdonation.png';
import peopleIcon from './resources/resources.png'

class HowHelp extends Component {

render(){
    return(
        <div className="infoHelp">
            <div className="preTitle"> 
                <p>APOYO CON CAUSA</p>
            </div>
            <div className= "titleHelp">
                <h1>¿Cómo puedo ayudar?</h1>
            </div>
            <div className= "subTitle">
                <p>Se parte de este gran esfuerzo, existen 3 formas de apoyar</p>
            </div>
            <div className= "row justify-content-center">
                <div className= "row col-md-8 col-sm-12 col-lg-8 justify-content-center iconBar">
                    <div className="col-md-4 col-sm-4 col-lg-4 ">
                        <img alt= "donation" src={donationIcon} />
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 ">
                        <img alt= "donationBox" src={donationBox} />
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 ">
                        <img alt= "people" src= {peopleIcon} />
                    </div>
                </div>
                <div className= "row col-md-8 col-sm-8 col-lg-8 decorLine">
                    <div className= "col-md-4 col-sm-4 col-lg-4">
                        <div className= "bulletDecor"> </div>
                        <div className= "txtDecor"> APOYO <br></br> ECONÓMICO </div>
                    </div>
                    <div className= "col-md-4 col-sm-4 col-lg-4">
                        <div className= "bulletDecor"> </div>
                        <div className= "txtDecor"> EN ESPECIE </div>
                    </div>
                    <div className= "col-md-4 col-sm-4 col-lg-4">
                        <div className= "bulletDecor"> </div>
                        <div className= "txtDecor"> VOLUNTARIADO </div>
                    </div>
                </div>
            </div>
            <div className= "row justify-content-center ">
                <div className= "row col-md-8 col-sm-12 col-lg-8 donationTxt">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <p>
                        Si deseas apoyar alguno de los proyectos educativos vigentes o futuros, te compartimos la información de la cuenta bancaria para depositos en Pesos para Fundacion Robert Bosch México A.C.:
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <p>
                        Banco: BANAMEX
                        <br></br>
                        Sucursal: 5983-Garden Santa Fe
                        <br></br>
                        No. De Cuenta: 0023/5920018
                        <br></br>
                        Cuenta Clabe: 002180002359200189
                        <br></br>
                        Agradecemos que la confirmación de depósitos
                        sea enviados a:
                        <br></br>
                        contacto@fundacionboschmexico.org
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

}

export default HowHelp;