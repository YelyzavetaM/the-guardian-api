import React, { Component } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Error from "./components/Error";

class App extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return (
      <div className="App">
        <Accordion />
      </div>
    );
  }
}

export default App;
