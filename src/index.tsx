import React, { Suspense } from "react";
import { render } from "react-dom";
import "./style.scss";

import('./App').then((result) => {
	render(
		<Suspense fallback={<div>Loading...</div>}>
			<result.App />
		</Suspense>,
		document.getElementById("app"),
	);
})

if (module.hot) {
	module.hot.accept()
}
