import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar";
import Video from "./Components/Video";
import Who from "./Components/Who";

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar />
      <Video />
      <Who />
    </React.Fragment>
    )
  }
}


export default App;
