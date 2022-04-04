import { useState } from "react";


function useFlip (initialState = true) {
	// call useState, "reserve piece of state"
	const [ isFlipped, setIsFlipped ] = useState(initialState);
	const flip = () => {
		setIsFlipped(faceUp => !faceUp);
	};

	// return piece of state AND a function to flip it
	return [ isFlipped, flip ];
}

export default useFlip;
