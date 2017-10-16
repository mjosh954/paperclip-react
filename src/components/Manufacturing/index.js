import React, { Component } from 'react'
import { Segment, Divider, Button } from 'semantic-ui-react'
import WireStore from './WireStore';
import AutoClipperStore from './AutoClipperStore';
import './Manufacturing.css';

export default class Manufacturing extends Component {

	_getAutoClipperStore = () => {
		const { funds, autoClipperCost, numAutoClippersOwned, handleBuyAutoClipper } = this.props;
		
		if(this.props.showAutoClippers) {
			return <AutoClipperStore disabled={autoClipperCost > funds} onPurchase={handleBuyAutoClipper} cost={autoClipperCost} numOwned={numAutoClippersOwned} />
		} else {
			return <div />
		}
	}

	render() {
		const { funds, wireCost, handleBuyWire, wire } = this.props;

		return (
			<Segment raised className='manufacturing'>
				<h3>Manufacturing</h3>
				<Divider />
				<WireStore disabled={wireCost > funds} wireCost={wireCost} handleBuyWire={handleBuyWire} wireAmount={wire} />
				{this._getAutoClipperStore()}
			</Segment>
		)
	}
}
