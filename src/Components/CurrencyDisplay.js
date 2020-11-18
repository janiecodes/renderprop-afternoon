import React from 'react'

// CREATE A FUNCTIONAL COMPONENT THAT RECEIVES PROPS AS A PARAMETER
const CurrencyDisplay = (props) => (
	// THEN, COPY THE <p> CODE FROM THE APP COMPONENT AND UPDATE THE amount AND
	// currencyData VALUES TO REFLECT HOW THE VALUES ARE RECEIVED THROUGH PROPS
	<p>
		US Dollar ${props.amount.toFixed(2)} - {props.currencyData.name}{' '}
		{props.currencyData.symbol}
		{(props.amount * props.currencyData.rate).toFixed(2)}
	</p>
)

export default CurrencyDisplay