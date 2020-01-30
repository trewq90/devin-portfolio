import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";
import Banner from "./banner.jpg";

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
        <div className="skewed-header">
          <div class="skewed-header">

            <div class="header-bg">

            </div>  

            <div class="skewed-header-wrapper">
              <div class="skewed-header-content">
                <div class="heading-wrapper">
                  <div class="about-me-wrapper">ABOUT ME</div>
                  <hr></hr>
                    <p>
                      I am an Atlanta-based Full Stack Web Developer with a great passion for learning
                      and developing practical and efficient user experiences.
                    </p>
                  <hr></hr>
                  </div>

                  <div class="skills-wrapper">
                    <div class="skills-one">
                      <div>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>Python 3</li>
                        <li>CSS</li>
                        <li>HTML5</li>
                        <li>JSON</li>
                        <li>Flask</li>
                      </div>

                      <div>
                        <li>UML</li>
                        <li>Git</li>                     
                        <li>SCSS/SASS</li>
                        <li>Flexbox</li>
                        <li>CSS Grid</li>
                        <li>SQL Databases</li>
                      </div>

                      <div className="hidden-skill">
                        <li>Visual Studio Code</li>
                        <li>Postman</li>
                        <li>Heroku</li>
                        <li>GitHub</li>
                        <li>MongoDB</li>
                      </div>
                    </div>

                    <div class="skills-two">
                      <li style={{ width: '158px' }}>Visual Studio Code</li>
                      <li>Postman</li>
                      <li>Heroku</li>
                      <li>GitHub</li>
                      <li>MongoDB</li>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="portfolio-items-wrapper">
          {/* Rat Game Div */}  
          <div className="master-div">
            <div className="border-wrapper">
              <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}>   
                <div className="portfolio-item-title">Rat Game</div>
                <div
            className=
            {"portfolio-img-background " + this.state.portfolioItemClass} style={{backgroundImage: `url(${Banner})`}}/>
                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                  </div>
                  <div className="subtitle">
                    testing
                  </div>
                </div>
              </div>

              <div className="important-links">
                <a href="google.com"
                className="github-link"
                target="_blank">
                  Github
                </a> 

                <a href="google.com"
                className="live-link"
                target="_blank">
                  Live
                </a> 
              </div>
            </div>
          </div> 
          {/* DevCamp Fries Div */} 
          <div className="master-div">
            <div className="border-wrapper">
              <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}>   
                <div className="portfolio-item-title">Rat Game</div>
                <div
            className=
            {"portfolio-img-background " + this.state.portfolioItemClass} style={{backgroundImage: `url(${Banner})`}}/>
                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                  </div>
                  <div className="subtitle">
                    testing
                  </div>
                </div>
              </div>

              <div className="important-links">
                <a href="google.com"
                className="github-link"
                target="_blank">
                  Github
                </a> 

                <a href="google.com"
                className="live-link"
                target="_blank">
                  Live
                </a> 
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}