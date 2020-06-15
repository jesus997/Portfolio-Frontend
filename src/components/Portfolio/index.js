import React, { Component } from "react";
import './index.css';

import PortfolioItem from '../../components/PortfolioItem';
 
class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            showModal: false,
            selectedProject: null
        }
    }

    openModal(project) {
        this.setState({
            showModal: true,
            selectedProject: project
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            selectedProject: this.projects[0]
        });
    }

    componentDidMount() {
        fetch('/data/portfolio.json')
        .then(results => {
            return results.json();
        }).then(data => {
            let projects = [];

            if(data !== null && "projects" in data) {
                projects = data.projects.map((project) => {
                    return(
                        <PortfolioItem key={project.id} data={project} onClickFunction={this.openModal}></PortfolioItem>
                    );
                });
            }

            this.setState({
                projects: projects,
                selectedProject: projects[0]
            });
        });
    }

    render() {
        return (
            <div className="portfolio portfolio-grid">
                { this.state.projects }

                <div id="project" className={this.state.showModal ? 'modal project-modal is-active' : 'modal project-modal'}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <section className="modal-card-body">
                            <h2 className="project-title">{this.state.selectedProject !== null ? this.state.selectedProject.title : ""}</h2>
                            <div className="project-meta">{this.state.selectedProject !== null ? this.state.selectedProject.category : ""}</div>
                            <figure className="image is-16by9 mx-0 mt-2">
                                <img src={this.state.selectedProject !== null ? this.state.selectedProject.image : ""} alt={this.state.selectedProject !== null ? this.state.selectedProject.title : ""} />
                            </figure>
                            <div className="project-description">
                                {this.state.selectedProject !== null ? this.state.selectedProject.content : ""}
                            </div>
                            <div className="project-links">
                            <a href={this.state.selectedProject !== null ? this.state.selectedProject.link : ""} target={this.state.selectedProject !== null ? this.state.selectedProject.link : ""}>{this.state.selectedProject !== null ? this.state.selectedProject.link : ""}</a>
                            </div>
                        </section>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={e => {
                        this.closeModal()
                    }}></button>
                </div>
            </div>
        );
    }
}
 
export default Portfolio;