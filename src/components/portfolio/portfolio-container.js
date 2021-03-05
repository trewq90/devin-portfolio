import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";
import Rat from "./rat-game-image-scaled.png"
import Fries from "./ds-devcamp-fries-scaled.png"

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
      portfolioItemClass: "",
      portfolioItemClass2: ""
    };

    this.handleFilter = this.handleFilter.bind(this);
    
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  handleMouseEnter2() {
    this.setState({ portfolioItemClass2: "image-blur" });
  }

  handleMouseLeave2() {
    this.setState({ portfolioItemClass2: "" });
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
            {"portfolio-img-background " + this.state.portfolioItemClass} style={{backgroundImage: `url(${Rat})`}}/>
                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                  </div>
                  <div className="subtitle">
                    Web based browser game made with ReactJS, CSS, SCSS, Flexbox, REST, Python, and Flask.
                  </div>
                </div>
              </div>

              <div className="important-links">
                <a href="https://github.com/trewq90/rat-capstone"
                className="github-link"
                target="_blank">
                  Github
                </a> 

                <a href="https://ds-capstone-frontend.herokuapp.com/"
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
                onMouseEnter={() => this.handleMouseEnter2()}
                onMouseLeave={() => this.handleMouseLeave2()}>   
                <div className="portfolio-item-title">DevCamp's Fantastic Fries</div>
                <div
            className=
            {"portfolio-img-background " + this.state.portfolioItemClass2} style={{backgroundImage: `url(${Fries})`}}/>
                <div className="img-text-wrapper">
                  <div className="logo-wrapper">
                  </div>
                  <div className="subtitle">
                    A multi page, responsive restaurant website made with HTML5, CSS3, Flexbox, and media queries. 
                  </div>
                </div>
              </div>

              <div className="important-links">
                <a href="https://github.com/trewq90/ds-devcamp-fries"
                className="github-link"
                target="_blank">
                  Github
                </a> 

                <a href="https://ds-devcamp-fries.herokuapp.com/"
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