import React from "react";
// import { v4 as uuid } from 'uuid';
import useAxios from "./hooks/useAxios";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable () {
	const [ cards, addCard, clearCards ] = useAxios(
		"cards",
		"https://deckofcardsapi.com/api/deck/new/draw/"
	);
	// const [ cards, setCards ] = useState([]);
	// const addCard = async () => {
	// 	const response = await axios.get(
	// 		"https://deckofcardsapi.com/api/deck/new/draw/"
	// 	);
	// 	setCards(cards => [ ...cards, { ...response.data, id: uuid() } ]);
	// };

	return (
		<div className="PlayingCardList">
			<h3>Pick a card, any card!</h3>
			<div>
				<button onClick={ () => addCard(formatCard) }>Add a playing card!</button>
				<button onClick={ clearCards }>Clear the table</button>
			</div>
			<div className="PlayingCardList-card-area">
				{ cards.map(cardData => (

					<PlayingCard key={ cardData.id } front={ cardData.image } />
				)) }
			</div>
		</div>
	);
}

CardTable.defaultProps = {};

export default CardTable;
