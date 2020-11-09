import React, { useState } from "react";

interface IButtonCounterProps {
	title: string;
	onClick?: (e: React.MouseEvent) => void;
}

export const ButtonCounter = ({ title, onClick }: IButtonCounterProps) => {
	const [count, setCount] = useState(0);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setCount(count + 1);
		onClick ? onClick(e) : undefined;
	};

	return (
		<button className="btn btn-outline-secondary" onClick={handleClick}>
			{title} {count}
		</button>
	);
}
