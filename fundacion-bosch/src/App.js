import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Video from "./Components/Video";
import Who from "./Components/Who";
import Helping from "./Components/Helping";
import LastProyects from "./Components/LastProyects";
import HowHelp from "./Components/HowHelp";
import ContactUs from "./Components/ContactUs";
import FooterApp from "./Components/FooterApp";
import Form from "./Components/Form";

class App extends Component {
  render() {
    return (
    <React.Fragment>

    <NavBar />
    <a name="home"></a><Video />
    <a name="quienes-somos"></a><Who />
    <a name="como-ayudamos"></a> <Helping />
    <a name="ultimos-proyectos"></a> <LastProyects />
    <a name="apoyo"></a> <HowHelp />
    <a name="contacto"></a> <ContactUs /> 
    <FooterApp />
    <a name="formulario"></a> <Form />

    </React.Fragment>
    )
  }
}

 
export default App;
