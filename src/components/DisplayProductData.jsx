import React, { Component } from "react";
import { getData } from "../modules/productData";

class DisplayProductData extends Component {
  state = {
    productData: []
  };

  componentDidMount() {
    this.getProductData();
  }

  async getProductData() {
    let result = await getData();
    this.setState({ productData: result.data.products });
  }

  render() {
    let entreeIndex, starterIndex, dessertIndex;

    if (
      Array.isArray(this.state.productData) &&
      this.state.productData.length
    ) {
      starterIndex = (
        <div id="starter-index">
          {this.state.productData.map(item => {
            if (item.category === "starter") {
              return (
                <div key={item.id}>
                  {item.name}
                  {item.description}
                  {item.price}
                </div>
							);
						}
          })}
        </div>
			);
			entreeIndex = (
        <div id="entree-index">
          {this.state.productData.map(item => {
            if (item.category === "entree") {
              return (
                <div key={item.id}>
                  {item.name}
                  {item.description}
                  {item.price}
                </div>
							);
						}
          })}
        </div>
			);
			dessertIndex = (
        <div id="dessert-index">
          {this.state.productData.map(item => {
            if (item.category === "dessert") {
              return (
                <div key={item.id}>
                  {item.name}
                  {item.description}
                  {item.price}
                </div>
							);
						}
          })}
        </div>
			);
    }

    return (
      <>
        <h2>Starters</h2>
        <div>{starterIndex}</div>
				<h2>Entrees</h2>
				<div>{entreeIndex}</div>
				<h2>Dessert</h2>
				<div>{dessertIndex}</div>
      </>
    );
  }
}
export default DisplayProductData;
