import React, { Component } from 'react';
import ProductsTable from './ProductsTable'
import './DropSelect.css';

class DropSelect extends Component {
	state = {
		products : [
	    {
	      name : 'Football',
	      price : 35.50,
	      manufacturer : 'Amazon',
	      rating : 5
	    },
	    {
	      name : 'Outboard Motor',
	      price : 235,
	      manufacturer : 'Boater\'s World',
	      rating : 2
	    },
	    {
	      name : 'International Space Station',
	      price : 9338,
	      manufacturer : 'N.A.S.A.',
	      rating : 3
	    },
	    {
	      name : 'Sperm Whale',
	      price : 49.99,
	      manufacturer : 'Fisherman\'s World',
	      rating : 1
	    },
	    {
	      name : 'Flowerpot',
	      price : 18.80,
	      manufacturer : 'Gardener\'s World',
	      rating : 4
	    },
	    {
	      name : 'Petunias',
	      price : 25.00,
	      manufacturer : 'Fox',
	      rating : 5
	    },
	  ]
	}

	selectSort = () => {
		const typeElem = document.getElementById("type");
		const typeValue = typeElem.options[typeElem.selectedIndex].value.toLowerCase();
		if (typeValue==='none')
			return;
		const directionElem = document.getElementById("direction");
		const directionValue = directionElem.options[directionElem.selectedIndex].value;
		if (typeValue==='price' || typeValue==="rating")
			this.sortTable(typeValue,directionValue, 'number');
		else
			this.sortTable(typeValue,directionValue,'text')
	}

	sortTable = (val,direction,type) => {
		let products = this.state.products;
		if (type==='number'){
			if (direction==="0")
				products.sort((a,b) => a[val] - b[val])
			else 
				products.sort((a,b) => b[val] - a[val])
		}
		else {
			if (direction==="0")
				products.sort((a,b) =>  b[val].toLowerCase() < a[val].toLowerCase() ? 1 : -1)
			else 
				products.sort((a,b) => a[val].toLowerCase() < b[val].toLowerCase() ? 1 : -1)
		}
		this.setState(products)
	}

	render() {
		return (
			<div className="DropSelect">
				<select id="type" defaultValue='none' onChange={this.selectSort}>
					<option value="none" disabled>--select option--</option>
					<option>Name</option>
					<option>Price</option>
					<option>Rating</option>
					<option>Manufacturer</option>
				</select>
				<select id="direction" onChange={this.selectSort}>
					<option value="0">Low to High</option>
					<option value="1">High to Low</option>
				</select>
				<ProductsTable products={this.state.products} />
			</div>
		);
	}
}

export default DropSelect;