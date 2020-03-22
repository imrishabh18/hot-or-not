import React from "react";
// import logo from "./logo.svg";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Male from "./components/Male";
import Female from "./components/Female";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/male" component={Male}/>
          <Route path="/female" component={Female}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
