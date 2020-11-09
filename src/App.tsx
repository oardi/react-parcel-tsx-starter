
import React, { useState } from "react";
import { ButtonCounter } from './components/ButtonCounter';

export const App = () => {
	const [name] = useState("Hello React TSX Parcel");

	return (
		<div>
			hello parcel
			<ButtonCounter title={name} />
		</div>
	);
};
