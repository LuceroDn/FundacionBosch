import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import "./Style/cardsProyect.css";
import dummypic from './resources/dummypic.png';

class ProyectCards extends Component {

  state = {
    projects: []
  };
  componentDidMount() {
    fetch(
      'https://api-rest-bosch.herokuapp.com/api/project'
    )
      .then(res => res.json())
      .then(projects => {
        this.setState({ projects: projects.projects }, () =>
          console.log('Products fetched', projects)
        );
      });
    }
      render() {
        const { projects } = this.state;
        console.log(projects);
          return(
            <div className= "projects">
              {projects.map((item, index) =>{
                return(
                <Card key={index} className= "dinamicCards col-md-4 col-sm-12 col-lg-4">
                  <Card.Img variant="top" src={item.picture} />
                  <span className="tags">{item.typeProject}</span>
                    <Card.Body>
                      <Card.Title>{item.nameProject}</Card.Title>
                        <Card.Text>
                        {item.content}
                        </Card.Text>
                        <Card.Link>Ver más > </Card.Link>
                    </Card.Body>
               </Card>
                )}
              )}
            </div>
          );
      }
    }
      
export default ProyectCards;