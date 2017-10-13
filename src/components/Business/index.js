import React, { Component } from 'react'
import numeral from 'numeral';
import { Segment, Divider, Button } from 'semantic-ui-react'

export default class Business extends Component {
	_raisePrice = (e) => {
		const currentPrice = numeral(this.props.price);
		this.props.adjustPrice(currentPrice.add(0.01).value());
	}

	_lowerPrice = (e) => {
		const currentPrice = numeral(this.props.price);
		this.props.adjustPrice(currentPrice.add(-0.01).value());
	}

	render() {
		const { funds, inventory, price, demand, adCost, handleBuyAds, marketingLevel } = this.props;
		return (
			<Segment raised>
				<h3>Business</h3>
				<Divider />
				<div>Available Funds: {numeral(funds).format('$0,0.00')}</div>
				<div>Unsold Inventory: {inventory}</div>
				<span>

					<Button.Group size='mini'>
						<Button disabled={price <= 0.01} onClick={this._lowerPrice} content='lower' />
						<Button.Or />
						<Button onClick={this._raisePrice} content='raise' />
					</Button.Group>
					 Price per Clip: ${numeral(price).format('0.00[0000]')}
				</span>
				<div>
					Public Demand {numeral(demand * 10).format()} %
				</div>
				<br />
				<div>
					<span>
						<Button size='mini' disabled={funds < adCost} onClick={handleBuyAds} content='Marketing' /> Level: {marketingLevel}
					</span>
					<div>Cost ${this.props.adCost}</div>
				</div>
			</Segment>
		)
	}
}
