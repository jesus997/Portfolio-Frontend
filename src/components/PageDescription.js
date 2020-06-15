import React, { Component } from "react";
 
class PageDescription extends Component {
  render() {
    return (
        <div className="page-description">
            { this.props.children }
        </div>
    );
  }
}
 
export default PageDescription;