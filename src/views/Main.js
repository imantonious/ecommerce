import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const Main = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get('https://fakestoreapi.com/products')
			.then((products) => {
				setItems(products.data);
				console.log(products.data);
			})
			.catch((err) => console.error('errrrrrrrr:', err));
	}, []);

	let products = items.map((product) => {
		return (
				<Card
					key={product.id}
					title={product.title}
					description={product.description}
					price={product.price}
					image={product.image}
				/>
			);
		}
	);


	return (
		<div>
			<Header />
			<SearchBar />
			{products}
		</div>
	);
};

export default Main;
