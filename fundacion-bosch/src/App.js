import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
    )
  }
}


export default App;
