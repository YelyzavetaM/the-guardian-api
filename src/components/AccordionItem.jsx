import React from "react";
import { Panel } from "react-bootstrap";

const AccordionItem = ({ eventKey, title, body }) => {
  return (
    <Panel eventKey={eventKey}>
      <Panel.Heading>
        <Panel.Title toggle>
          {title}

          {/* {className === "down" ? (
            <i class="fas fa-angle-down" />
          ) : (
            <i class="fas fa-angle-up" />
          )} */}
        </Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>{body}</Panel.Body>
    </Panel>
  );
};

export default AccordionItem;
