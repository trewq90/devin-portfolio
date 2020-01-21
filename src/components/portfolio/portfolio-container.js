import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";
import { HashLink as Link } from 'react-router-hash-link';

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getPortfolioItems() {
    axios
      .get("https://devinsetiady.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="information-wrapper">
        About Me
        <div className="about-me-wrapper">
          Full stack web developer.

          <div className="skills-wrapper">

          Javascript, ReactJS, Python 3, UML, HTML5, CSS, Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS Grid
        ● Design Tools: Visual Studio Code, Postman, Heroku, GitHub


          </div>
          

          
        </div>
        
        <div class="portfolio-items-wrapper">
          
          {this.portfolioItems()}
        </div>
      </div>
    );
  }
}