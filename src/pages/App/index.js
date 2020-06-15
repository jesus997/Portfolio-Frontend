import React from 'react';
import 'bulma/css/bulma.css';
import './index.css';

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Home from "../Home";
import Blog from "../Blog";
import Contact from "../Contact";
import CV from "../CV";

function App() {
  return (
    <BrowserRouter>
      <aside className="sidebar">
        <header className="header">
          <figure className="avatar image is-128x128">
            <img className="is-rounded" src="https://bulma.io/images/placeholders/256x256.png" alt="" />
          </figure>
          <h1 className="site-name">Jesús Magallón</h1>
          <h2 className="site-tagline">Full-stack Middle Web Developer</h2>
        </header>

        <nav className="menu">
          <ul className="menu-list">
            <li>
              <NavLink exact to="/">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contáctame</NavLink>
            </li>
          </ul>

          <ul className="menu-list">
            <li>
              <NavLink to="/cv">Mi CV</NavLink>
            </li>
            <li>
              <a href="#">Videos <span className="tag is-white">Próximamente</span></a>
            </li>
            <li>
              <a href="#">Streams <span className="tag is-white">Próximamente</span></a>
            </li>
          </ul>
        </nav>

        <footer className="footer">
          <h3>Sígueme en</h3>
          <ul className="social-networks">
            <li>
              <a href="https://twitter.com/yosoydev" target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-2x fa-twitter-square"></i></a>
            </li>
            <li>
              <a href="https://github.com/jesus997" target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-2x fa-github-square"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jesus-magallon" target="_blank" rel="noopener noreferrer"><i className="fab fa-fw fa-2x fa-linkedin"></i></a>
            </li>
            <li>
              <a href="mailto:jesus@yosoydev.net"><i className="fas fa-fw fa-2x fa-envelope-square"></i></a>
            </li>
          </ul>
          <p className="copy">Jesús Magallón &copy; 2020</p>
        </footer>
      </aside>
      <main className="content">
        <div className="container is-fluid">
          <Route exact path="/" component={Home}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contacto" component={Contact}/>
          <Route path="/cv" component={CV}/>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
