import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { FadeLoader } from "react-spinners";
import Spinner from "react-spinkit";
import { CircleSpinner } from "react-spinners-kit";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "grey" }}>
        <h1>using 'npm install react-loader-spinner --save'</h1>
        <Loader type="Puff" color="#ffffff" height="100" width="100" />
        <h1>using 'npm install react-spinners --save'</h1>
        <FadeLoader sizeUnit={"px"} size={150} color={"#ffffff"} loading />
        <h1>using 'npm install react-spinkit --save'</h1>
        <Spinner name="ball-scale-ripple" color="white" />
        <h1>using 'npm install --save react-spinners-kit'</h1>
        <CircleSpinner size={30} color="white" sizeUnit="px" loading />
      </div>
    );
  }
}

export default App;
