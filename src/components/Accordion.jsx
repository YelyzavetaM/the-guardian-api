import React, { Component } from "react";
import { API } from "../api/API";
import { PanelGroup, Pager } from "react-bootstrap";
import AccordionItem from "./AccordionItem";

class Accordion extends Component {
  state = {
    items: [],
    currentPage: 1
  };

  componentDidMount() {
    API.get(this.state.currentPage)
      .then(r => r.json())
      .then(data => {
        this.setState({
          items: data.response.results,
          totalPages: data.response.pages
        });
      });
  }

  handleClick = e => {
    // e.preventDefault();
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

  handleNextPage = () => {
    this.setState(
      {
        currentPage: this.state.currentPage + 1
      },
      this.handleClick
    );
  };

  handlePrevPage = () => {
    this.setState(
      {
        currentPage: this.state.currentPage - 1
      },
      this.handleClick
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

        <div>
          <Pager>
            {this.state.currentPage === 1 ? (
              <Pager.Item previous href="#" disabled>
                &larr; Previous Page
              </Pager.Item>
            ) : (
              <Pager.Item previous href="#" onClick={this.handlePrevPage}>
                &larr; Previous Page
              </Pager.Item>
            )}
            <Pager.Item href="#">
              {this.state.currentPage} of {this.state.totalPages} pages
            </Pager.Item>

            <Pager.Item next href="#" onClick={this.handleNextPage}>
              Next Page &rarr;
            </Pager.Item>
          </Pager>
        </div>
      </div>
    );
  }
}

export default Accordion;
