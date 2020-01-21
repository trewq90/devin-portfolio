import React, { Component } from "react";

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, name, description, url, url2, thumb_image_url, logo_url } = this.props.item;
    return (
     <div className="master-div">
       <div className="border-wrapper">
        <div className="portfolio-item-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          
          <div className="portfolio-item-title">{name}</div>
          
          <div
            className={
              "portfolio-img-background " + this.state.portfolioItemClass
            }
            style={{
              backgroundImage: "url(" + thumb_image_url + ")"
            }}
          />
          <div className="img-text-wrapper">
            <div className="logo-wrapper">
              <img src={logo_url} />
            </div>
            
            <div className="subtitle">{description}</div>
          </div>
        </div>

        <div className="important-links">
          <a href={url} 
          className="github-link"
          target="_blank">
            Github
          </a> 

          <a href={url} 
          className="live-link"
          target="_blank">
            Live
          </a> 
        </div>

      </div>
      
    </div> 
    );
  }
}