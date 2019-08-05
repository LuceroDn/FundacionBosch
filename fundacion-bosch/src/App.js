import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LastProyects from "./Components/LastProyects";
import HowHelp from "./Components/HowHelp";
import ContactUs from "./Components/ContactUs";
import FooterApp from "./Components/FooterApp";

class App extends Component {
  render() {
    return (
    <React.Fragment>
     <LastProyects />
     <HowHelp />
     <ContactUs /> 
     <FooterApp />
    </React.Fragment>
    )
  }
}

/*   <LastProyects />
      <HowHelp />
      <ContactUs />
      <FooterApp />*/ 
export default App;
