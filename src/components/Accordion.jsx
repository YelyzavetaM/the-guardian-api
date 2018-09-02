import React, { Component } from "react";
import { API } from "../api/API";
import { PanelGroup } from "react-bootstrap";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    API.get()
      .then(r => r.json())
      .then(data => {
        this.setState({
          items: data.response.results
        });
      });
  }

  handleClick = e => {
    e.preventDefault();
    this.componentDidMount();
  };

  handleReadMore = (text, link) => {
    return (
      <div>
        <p>{text}</p>
        <a href={link}>Read more...</a>
      </div>
    );
  };

  render() {
    let { items } = this.state;

    return (
      <div className="accordion-container">
        <h1>The Guardian News</h1>
        <button onClick={this.handleClick}>Refresh</button>
        <PanelGroup accordion id="accordion-example">
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              eventKey={index}
              title={item.webTitle}
              body={this.handleReadMore(
                item.blocks.body[0].bodyTextSummary,
                item.webUrl
              )}
            />
          ))}
        </PanelGroup>
      </div>
    );
  }
}

export default Accordion;
