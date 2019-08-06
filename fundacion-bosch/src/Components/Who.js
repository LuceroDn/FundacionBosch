import React, { Component } from 'react';
import './Style/Who.css';

class Who extends Component {
    render() {
        return (
            <div className="container-fluid backgroundWho">
            <div className="row">

                <div className="col-sm-12 col-md-6 offset-md-1">
                    <div>
                        <h1 className="titleWho col-sm-10 text-align-center">¿Quiénes Somos?</h1>
                    </div>

                    <div>
                        <p className="textWho col-sm-10 col-md-12">Fundación Robert Bosch México A. C., es una organización no&nbsp;
              <br />
                            gubernamental, sin ánimo de lucro, con presencia a nivel nacional,&nbsp;
              <br />
                            dedicada al desarrollo de proyectos que favorezcan la plena&nbsp;
              <br />
                            inserción de niños y jóvenes en riesgo de exclusión a causa de&nbsp;
              <br />
                            factores socioeconómicos en ámbitos educativos de calidad.</p>
                    </div>

                    <div className="linkWho col-sm-3">
                    <a>Saber más<span className="iconWho"><i class="fas fa-chevron-right"></i></span></a>
                    </div>
                </div>

                <div className="col-sm-12 col-ms-4 offset-md-7 justify-content-sm-center  justify-content-md-end justify-content-lg-end justify-content-xl-end">
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