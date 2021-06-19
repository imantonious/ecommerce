import React from 'react';

import '../styles/Card.css';

const Card = ({ title, description, price, image }) => {

	return (
		<div className="card">
			<h4 className="card-title">{title}</h4>

			{image ? <img src={image} alt={title} /> : <h2>Loading...</h2> }

			<div className="card-content">
				<p>{description}</p>
				<p className="price-label">£{price.toFixed(2)}</p>
				<button className="btn" onClick={() => alert(`${title} has been added to your cart`)}>Add to card</button>
			</div>
		</div>
	);
};

export default Card;
