import React from 'react';
import './ProductsTable.css';

const ProductsTable = (props) => {
	let table = [<tr key='tr0'><th>Name</th><th>Price</th><th>Rating</th><th>Manufacturer</th></tr>];
	for (const [i,product] of props.products.entries()){
		let cell = [];
		cell.push(<td key={i*5+1}>{product.name}</td>,<td className="priceCell" key={i*5+2}>{product.price.toFixed(2)}</td>,<td key={i*5+3}>{product.rating}</td>,<td key={i*5+4}>{product.manufacturer}</td>)
		table.push(<tr key={i*5}>{cell}</tr>);
	}
  return (
    <table className="ProductsTable"><tbody>{table}</tbody></table>
  )
}

export default ProductsTable;