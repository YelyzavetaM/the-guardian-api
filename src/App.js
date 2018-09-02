import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    hasError: false
  };

  componentDidMount() {
    const FETCH_URL =
      "https://content.guardianapis.com/search?api-key=39e248c1-51b1-48ba-8245-15625d163800";
    fetch(FETCH_URL)
      .then(r => r.json())
      .then(data => {
        this.setState({
          items: data.response.results
        });
      })

      .catch(error => {
        console.log(error);
      });
  }

  // componentDidCatch(error, info) {
  //   this.setState({ hasError: true });
  // }

  // handleClick = e => {
  //   e.preventDefault();
  //   this.setState({ items: data.response.results });
  // };

  render() {
    let { items, hasError } = this.state;

    if (!items)
      return (
        <p>Sorry, we couldn't find news for you. Please try again later!</p>
      );

    // if (hasError) {
    //   return (

    //     <p>Sorry, we couldn't find news for you. Please try again later!</p>
    //   );
    // }
    return (
      <div className="App">
        <h1>The Guardian News</h1>
        <button
        // onClick={this.handleClick}
        >
          Refresh
        </button>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.webTitle}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
