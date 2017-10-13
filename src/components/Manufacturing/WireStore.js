import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

export default class WireStore extends Component {
	render () {
		const { funds, wireCost, wireAmount, handleBuyWire, disabled } = this.props;
		return (
			<div className='wireStore'>
				<span>
					<Button size='mini' disabled={disabled} onClick={handleBuyWire} content='Wire' /> {wireAmount}
				</span>
				<div>Cost: ${wireCost}</div>
			</div>
		)
	}
}