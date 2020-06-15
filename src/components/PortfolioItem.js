import React, { Component } from "react";
 
class PortfolioItem extends Component {
    render() {
        let content = this.props.data.content.length > 115 ? this.props.data.content.substring(0, 115) + "..." : this.props.data.content;
        return (
            <div className="project card">
                <div className="card-image project-image">
                    <figure className="image is-4by3">
                        <img src={this.props.data.image} alt={this.props.data.title} />
                    </figure>
                </div>
                <div className="card-content">
                    <h3 className="project-title title">{this.props.data.title}</h3>
                    <div className="project-description content">
                        {content}
                    </div>
                    <h4 className="project-category">{this.props.data.category}</h4>
                </div>
                <a className="stretched-link" href="#project" onClick={this.props.onClickFunction(this.props.data)}> </a>
            </div>
        );
    }
}
 
export default PortfolioItem;