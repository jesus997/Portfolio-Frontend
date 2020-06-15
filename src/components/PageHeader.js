import React, { Component } from "react";
 
class PageHeader extends Component {
  render() {
    return (
        <header className="page-header">
            <h2 className="page-title">{ this.props.title }</h2>
        </header>
    );
  }
}
 
export default PageHeader;