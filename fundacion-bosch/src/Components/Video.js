import React, { Component } from 'react';
import './Style.css/Video.css';
import videoBosch from './img/videoBosch.mp4';
import posterVideo from './img/becas.jpg';

class Video extends Component {
    render() {
        return (

            <section className="header-container">
                <div className="video-container">

                    <div className="videoBox">
                        <video preload="true" autoPlay loop muted poster={posterVideo}>
                        <source src={videoBosch} type="video/mp4"></source> 
                        </video>
                    </div>
                    <div className="titleVideo">
                    <h1>Programas que&nbsp;
                        <br />

                       cambian vidas</h1>
                       <h5>Proyectos que favorezcan la plena inserción de&nbsp;
                           <br/>
                           niños, niñas y jóvenes en riesgo de exclusión social a causa de factores socioeconómicos,&nbsp;
                           <br/>
                            promoviendo la calidad de la educación, con la intención de cultivar verdaderos agentes de cambio
                       </h5>
                </div> 
                </div>
            </section>


                     
        )
    }
}

export default Video;