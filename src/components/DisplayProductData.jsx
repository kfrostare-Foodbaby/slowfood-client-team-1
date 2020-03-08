import React, { Component } from "react";
import { getData } from "../modules/productData";
import axios from 'axios';

class DisplayProductData extends Component {
  state = {
    productData: [],
    message: {}
  };

  componentDidMount() {
    this.getProductData();
  }

  async getProductData() {
    let result = await getData();
    this.setState({ productData: result.data.products });
  }

  async addToOrder(event) {
    let id = event.target.parentElement.dataset.id
    let result = await axios.post('http://localhost:3000/api/orders', { id: id } )
    this.setState({message: {id: id, message: result.data.message}})
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
                <div key={item.id} id={`product-${item.id}`} data-id={item.id} data-price={item.price}>
                  <h4>{item.name}</h4>
                  {item.description} {item.price}kr
                  <button id='button' onClick={this.addToOrder.bind(this)}>Add to order</button>
                  {parseInt(this.state.message.id) === item.id && <p class='message'>{this.state.message.message}</p>}
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
                <div key={item.id} id={`product-${item.id}`} data-id={item.id} data-price={item.price}>
                  <h4>{item.name}</h4>
                  {item.description} {item.price}kr
                  <button id='button' onClick={this.addToOrder.bind(this)}>Add to order</button>
                  {parseInt(this.state.message.id) === item.id && <p class='message'>{this.state.message.message}</p>}
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
                <div key={item.id} id={`product-${item.id}`} data-id={item.id} data-price={item.price}>
                  <h4>{item.name}</h4>
                  {item.description} {item.price}kr
                  <button id='button' onClick={this.addToOrder.bind(this)}>Add to order</button>
                  {parseInt(this.state.message.id) === item.id && <p class='message'>{this.state.message.message}</p>}
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
        {starterIndex}
				<h2>Entrees</h2>
				{entreeIndex}
				<h2>Dessert</h2>
			  {dessertIndex}
      </>
    );
  }
}
export default DisplayProductData;
