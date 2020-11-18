import React, { Component } from 'react'
import './App.css'

import CurrencyConverter from './Components/CurrencyConverter'
import CurrencyDisplay from './Components/CurrencyDisplay'

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				<CurrencyConverter
					render={(currencyData, amount) => (
					// REPLACE THE <p> ELEMENT WITH THE CurrencyDisplay COMPONENT
					// AND PASS THE currencyData AND amount VALUES TO THE COMPONENT
					// USING COMPONENT PROPS
						<CurrencyDisplay currencyData={currencyData} amount={amount} />
					)}
				/>
			</>
		)
	}
}

export default App