import React, { Component } from 'react'
import CurrencyDisplay from './CurrencyDisplay'

class CurrencyConverter extends Component {
	state = {
		currencyChosen: false,
		selectedCurrency: 'Select Currency',
		amount: 0
	}

    handleOptionSelect = (event) => {
		const userValue = event.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
    }
    
	// ADD BOUND handleAmountIncrease FUNCTION
	handleAmountIncrease = () => {
		this.setState((prevState) => {
			return {
				amount: prevState.amount + 1
			}
		})
	}
	
	// ADD BOUND handleAmountDecrease FUNCTION THAT ENSURES THAT AMOUNT
	// ON STATE IS NEVER LESS THAN 0
	handleAmountDecrease = () => {
		return (
			this.state.amount > 0 &&
			this.setState((prevState) => {
				return {
					amount: prevState.amount - 1
				}
			})
		)
	}
	
	// ADD BOUND handleOptionSelect FUNCTION
	handleOptionSelect = (event) => {
		const userValue = event.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}

	render() {
		const currencyData = [
			{ name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
			{ name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
			{ name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
			{ name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
			{ name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
		]
		const currencyOptions = currencyData.map((currency, index) => (
			<option key={currency.id} value={index}>
				{currency.name}
			</option>
		))
		return (
			<div>
				<select
					value={this.state.selectedCurrency}
					// ADD ONCHANGE FUNCTION THAT CALLS handleOptionSelect
					onChange={this.handleOptionSelect}>
					<option value='Select Currency'>Select Currency</option>
					{currencyOptions}
				</select>
				<div>
					// ADD ONCLICK FUNCTION THAT CALLS handleAmountIncrease
					<button className='add' onClick={this.handleAmountIncrease}>
						+
					</button>
					// ADD ONCLICK FUNCTION THAT CALLS handleAmountDecrease
					<button className='minus' onClick={this.handleAmountDecrease}>
						-
					</button>
				</div>
                // CREATE A TERNARY TO DETERMINE WHAT TO DISPLAY DEPENDING ON WHETHER
				// A CURRENCY HAS BEEN SELECTED OR NOT
				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
                    <p>Please Select Currency</p>)}
                
			</div>
		)
	}
}

export default CurrencyConverter