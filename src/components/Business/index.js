import React, { Component } from 'react'
import numeral from 'numeral';
import { Segment, Divider, Button } from 'semantic-ui-react'
import Marketing from './Marketing';
import './Business.css';

export default class Business extends Component {
	_raisePrice = (e) => {
		this.props.adjustPrice(this.props.price + 0.01);
	}

	_lowerPrice = (e) => {
		this.props.adjustPrice(this.props.price + (-0.01));
	}

	render() {
		const { funds, inventory, price, demand, adCost, handleBuyAds, marketingLevel } = this.props;
		const formattedFunds = numeral(funds).format('$0,0.00');
		const formattedCpc = numeral(price).format('$0,0.00');
		return (
			<Segment raised>
				<h3>Business</h3>
				<Divider />
				<div>Available Funds: {formattedFunds}</div>
				<div>Unsold Inventory: {inventory}</div>
				<span>
					<Button.Group size='mini'>
						<Button disabled={price <= 0.01} onClick={this._lowerPrice} content='lower' />
						<Button.Or />
						<Button onClick={this._raisePrice} content='raise' />
					</Button.Group>
					Price per Clip: {formattedCpc}
				</span>
				<div>
					Public Demand {numeral(demand * 10).format()} %
				</div>
				<Marketing disabled={funds < adCost} onUpgrade={handleBuyAds} cost={adCost} level={marketingLevel} />
			</Segment>
		)
	}
}
