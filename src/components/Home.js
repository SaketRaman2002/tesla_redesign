import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Section from './Section';
export default class home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
	  autoplay: true,
    };
    return (
		<div class="main">
      <div class="slider">
        <Slider {...settings}>
          <div>
           
		  <Section 
				title="Model S" 
				description="Order Online fro Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
          </div>
          <div>
		  <Section 
				title="Model 3" 
				description="Order Online fro Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
          </div>
          <div>
		  <Section 
				title="Model X" 
				description="Order Online fro Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
          </div>
          <div>
		  <Section 
				title="Model Y" 
				description="Order Online fro Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
          </div>
          <div>
		  <Section
				title="Lowerst Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="Oder now"
				rightBtnText="Learn more"
			>
			</Section>
          </div>
          <div>
		  <Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New"
				backgroundImg="solar-roof.jpg"
				leftBtnText="Oder now"
				rightBtnText="Learn more"
			>
			</Section>
          </div>
		  <div>
		  <Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop now"
			>
			</Section>
          </div>
        </Slider>
      </div>
	 
	  </div>
    );
  }
}
