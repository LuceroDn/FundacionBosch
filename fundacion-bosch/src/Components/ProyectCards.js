import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import "./Style.css/cardsProyect.css";
import dummypic from './resources/dummypic.png';

class ProyectCards extends Component {

  constructor(props){
    super(props);
    this.nameProyect = "Nombre del proyecto";
    this.textProyect = "Some quick example text to build on the card title and make up the bulk of the cards content.";  
    this.showMore = "#";
  }

render() {
    return(
        <Card className= "dinamicCards col-md-4 col-sm-12 col-lg-4">
          <Card.Img variant="top" src={dummypic} />
            <Card.Body>
              <Card.Title>{this.nameProyect}</Card.Title>
                <Card.Text>
                 {this.textProyect}
                </Card.Text>
                <Card.Link href={this.showMore}>Ver más > </Card.Link>
            </Card.Body>
      </Card>
    );
}

}

export default ProyectCards;