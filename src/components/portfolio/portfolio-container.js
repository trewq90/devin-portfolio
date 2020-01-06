import React, { Component } from "react";
import axios from "axios";
import Banner from "./banner.jpg"
import PortfolioItem from "./portfolio-item";

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
      <div className="opening-wrapper">
        <div className="banner" style={{backgroundImage: `url(${Banner})`}}>
          <h1>Devin Lubis</h1>

          <h1>Full Stack Web Developer. I like learning things.</h1>
        </div>
          About Me

        <div className="about-me">
          
        </div> 

        <div className="portfolio-items-wrapper">
          {this.portfolioItems()}
        </div>
      </div>
    );
  }
}