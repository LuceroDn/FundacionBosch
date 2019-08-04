import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LastProyects from "./Components/LastProyects";
import HowHelp from "./Components/HowHelp";
import ContactUs from "./Components/ContactUs";

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <LastProyects />
      <HowHelp />
      <ContactUs />
    </React.Fragment>
    )
  }
}


export default App;
