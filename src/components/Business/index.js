import React, { Component } from 'react'
import numeral from 'numeral';

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
		return (
			<div>
				<h3>Business</h3>
				<hr />
				<div>Available Funds: {numeral(this.props.funds).format('$0,0.00')}</div>
				<div>Unsold Inventory: {this.props.inventory}</div>
				<span>
					<button disabled={this.props.price <= 0.01} onClick={this._lowerPrice}>lower</button>
					<button onClick={this._raisePrice}>raise</button>
					Price per Clip: ${numeral(this.props.price).format('0.00[0000]')}
				</span>
				<div>
					Public Demand {numeral(this.props.demand * 10).format()} %
				</div>
			</div>
		)
	}
}
