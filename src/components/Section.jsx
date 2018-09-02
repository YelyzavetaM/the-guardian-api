// import React, { Component } from "react";

// class Section extends Component {
//   state = {
//     open: false,
//     className: "accordion-content accordion-close",
//     headingClassName: "accordion-heading"
//   };

//   handleClick = () => {
//     const { open } = this.state;
//     if (open) {
//       this.setState({
//         open: false,
//         className: "accordion-content accordion-close",
//         headingClassName: "accordion-heading"
//       });
//     } else {
//       this.setState({
//         open: true,
//         className: "accordion-content accordion-open",
//         headingClassName: "accordion-heading clicked"
//       });
//     }
//   };
//   render() {
//     const { className } = this.state;
//     const { headingClassName } = this.state;
//     return (
//       <div className="parent-accordion" onClick={this.handleClick}>
//         <div className={headingClassName}>{this.props.item.webTitle}</div>
//         <div className={className}>{this.props.item.apiUrl}</div>
//       </div>
//     );
//   }
// }

// export default Section;
