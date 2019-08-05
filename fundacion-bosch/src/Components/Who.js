import React, { Component } from 'react';
import './Style.css/Who.css';
import videoBosch from './img/videoBosch.mp4';

class Who extends Component {
    render() {
        return (
            <div className="container-fluid backgroundWho">
            <div className="row-sm-12">

                <div className="Menu col-sm-6">
                    <div>
                        <h1 className="titleWho">¿Quiénes Somos?</h1>
                    </div>

                    <div>
                        <p className="textWho">Fundación Robert Bosch México A. C., es una organización no&nbsp;
              <br />
                            gubernamental, sin ánimo de lucro, con presencia a nivel nacional,&nbsp;
              <br />
                            dedicada al desarrollo de proyectos que favorezcan la plena&nbsp;
              <br />
                            inserción de niños y jóvenes en riesgo de exclusión a causa de&nbsp;
              <br />
                            factores socioeconómicos en ámbitos educativos de calidad.</p>
                    </div>

                    <div className="linkWho">
                    <a>Saber más<span className="iconWho"><i class="fas fa-chevron-right"></i></span></a>
                    </div>
                </div>

                <div className="row  justify-content-center  justify-content-md-end">
                    <div className="card" className="videoWBox">
                    <iframe className="videoWho" src="https://www.youtube.com/embed/pnG7D8v7iTM" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Who;