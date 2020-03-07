import React, { Component } from 'react';
import { getData } from '../modules/productData';

class DisplayProductData extends Component {
	state = {
    productData: [],
    renderStarter: false
	}

	componentDidMount() {
		this.getProductData()
	}

	async getProductData() {
		let result = await getData();
		this.setState({ productData: result.data.products })
	}

	render() {
    const { renderStarter } = this.state;
      let dataIndex
      let starter

    if (Array.isArray(this.state.productData) && this.state.productData.length )
			dataIndex = (
				<div id="index">
					{this.state.productData.map(item.category => {
            if ({ item.category === starter })
						return <div key={item.id}>{item.name}{item.description}{item.price}</div>
					})}
				</div>
			)
    }

		return (
			<div>
				{dataIndex}
			</div>
		)
	}
}

export default DisplayProductData;