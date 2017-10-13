import React, { Component } from 'react'
import { Segment, Divider, Button } from 'semantic-ui-react'
import WireStore from './WireStore';
import AutoClipperStore from './AutoClipperStore';
import './Manufacturing.css';

export default class Manufacturing extends Component {
	render() {
		const { funds, wireCost, handleBuyWire, wire, autoClipperCost, numAutoClippersOwned } = this.props;
		return (
			<Segment raised className='manufacturing'>
				<h3>Manufacturing</h3>
				<Divider />
				<WireStore disabled={wireCost > funds} wireCost={wireCost} handleBuyWire={handleBuyWire} wireAmount={wire} />
				<AutoClipperStore disabled={autoClipperCost > funds} cost={autoClipperCost} numOwned={numAutoClippersOwned} />
			</Segment>
		)
	}
}
