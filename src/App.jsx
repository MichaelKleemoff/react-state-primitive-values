import { useState } from 'react';

import './App.css';

function App() {
	const [color, setColor] = useState('azure');
	let [counter, setCounter] = useState(0);
	const [defaultFontColor, setDefaultFontColor] = useState(true);

	const colors = [
		'papayawhip',
		'thistle',
		'peachpuff',
		'lightgoldenrodyellow',
		'paleturquoise',
	];

	function changeColor() {
		const chooseIndex = Math.floor(Math.random() * colors.length);
		setColor(colors[chooseIndex]);
		setCounter(counter + 1);
	}

	function resetCounter() {
		setCounter(0);
	}

	function toggleFontColor() {
		setDefaultFontColor(!defaultFontColor);
	}

	return (
		<div style={{ height: '100vh', backgroundColor: color }}>
			<h2>{color}</h2>
			<h3 style={defaultFontColor ? { color: 'black' } : { color: 'white' }}>
				The color has been changed {counter} times
			</h3>
			<button onClick={changeColor}>Change Color</button>
			<button onClick={resetCounter}>Reset Counter</button>
			<button onClick={toggleFontColor}>Toggle Font Color</button>
		</div>
	);
}

export default App;
