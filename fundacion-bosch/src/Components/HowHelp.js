import React, { Component } from "react";
import "./Style/howHelp.css";
import donationIcon from './resources/donation1.png';
import donationBox from './resources/boxdonation.png';
import peopleIcon from './resources/resources.png'

class HowHelp extends Component {    

    constructor(props){
        super(props);
         this.bankInfo = React.createRef();
         this.infoMaterial = React.createRef();
         this.infoVoluntary = React.createRef();
    }
/*nombre de la referencia.current.value*/

    showInfo = (element,src) =>{
        this.bankInfo.current.style.display = "none";
        this.infoMaterial.current.style.display = "none";
        this.infoVoluntary.current.style.display = "none";
        element.current.style.display = "flex";
        /*src.target.parentElement.style.color = "blue";*/
        
    }

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
                    <div className="col-md-4 col-sm-4 col-lg-4 " onClick={(e)=>{this.showInfo(this.bankInfo, e)}}>
                        <img alt= "donation" src={donationIcon} />
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 " onClick={(e)=>{this.showInfo(this.infoMaterial, e)}}>
                        <img alt= "donationBox" src={donationBox} />
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 " onClick={(e)=>{this.showInfo(this.infoVoluntary, e)}}>
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
            <div ref={this.bankInfo} className= "row justify-content-center ">
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
            <div ref={this.infoMaterial} className= "row justify-content-center" style={{display:"none"}}>
                <div className= "row col-md-8 col-sm-12 col-lg-8 donationTxt">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <p>
                        Cualquier persona u organización que lo desee puede hacer aportaciones materiales o en especie para algun proyecto concreto e iniciar otros nuevos. <br></br>Algunos elemplos de donaciones frecuentes son los siguientes:
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <p>
                            -Ceder espacios, equipamiento o recursos para la realización de actividades educativas. <br></br>
                            -Donar material escolar, educativo o informático para aulas o laboratorios escolares. <br></br>
                            Si estas interesado en realizar alguna aportación, ponte en contacto con nosotros para informarte sobre el procedimiento.
                        </p>
                    </div>
                </div>
            </div>
            <div ref={this.infoVoluntary} className= "row justify-content-center" style={{display:"none"}}>
                <div className= "row col-md-8 col-sm-12 col-lg-8 donationTxt">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <p>
                       Los voluntarios son la valiosa fuerza y talento en movimiento en Fundacion Bosch. A través de estas iniciativas, es posible generar cambios en las escuelas, insitituciones y comunidades. Puedes participar como voluntario en diversas actividades, desde educativas hasta de mejora de infraestructura, siempre trabajando en apoyo a niños y jóvenes en México.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <p>
                        ¿Te interesa nuestro trabajo y quieres echarnos una mano? <br /> <br/>A través del voluntariado tienes multiples formas de canalizar esa iniciativa y esas ganas de colaborar.
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

}

export default HowHelp;