import React, { Component } from "react";
import "./Style/seeMore.css";
import bluePrint from './resources/blueprint.png';
/*import dummy2 from './resources/dummy2.png';*/
class SeeMore extends Component {
    
    state = {
        projects: []
    };
    componentDidMount() {
    fetch('https://api-rest-bosch.herokuapp.com/api/project')
        .then(res => res.json())
        .then(projects => {
        this.setState({ projects: projects.projects }, () =>
            console.log('Products fetched', projects)
        );
        });
    }
render() {
    const { projects } = this.state;
    
    return(
        <div className="seeMorePage">
            
            {projects.map((item, index) =>{
                
                return( 
                <React.Fragment>
                    <div key={index} className="contactTitle">
                        <div className="upTitle"> 
                            {item.committee}
                        </div>
                        <h1>
                        {item.nameProject}
                        </h1>
                    </div>
                
                    <div className="row">
                    
                        <div className="row col-md-12 col-sm-12 col-lg-12">
                    
                                <div className= "col-md-6 col-sm-12 col-lg-6 benefitStadistic">
                                    <img alt="beneficiados" src={bluePrint} />
                                    <p className="upTitleDark">INFRAESTRUCTURA</p>
                                    <p className="numberData">BENEFICIADOS: {item.benefited}</p>
                                </div>
                    
                                <div className="col-md-6 col-sm-12 col-lg-6 contactInfoTxt">
                    
                                    <div className= "col-md-12 col-sm-12 col-lg-12">
                                        {item.content}
                                    </div>
                    
                                </div>
                        </div>
                    
                    </div>
                    
                    <div className="row col-md-12 col-sm-12 col-lg-12 proyectPic">
                
                        <img alt="portada" src={item.picture} />
                    
                    </div>
                </React.Fragment>
                )
                } )
            }
        </div>
    )
}
}
export default SeeMore;