import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react'
import numeral from 'numeral';

export default class WireStore extends PureComponent {
	render () {
		const { wireCost, wireAmount, handleBuyWire, disabled } = this.props;
		const formattedCost = numeral(wireCost).format('$0,0.00');
		return (
			<div className='wireStore'>
				<span>
					<Button size='mini' disabled={disabled} onClick={handleBuyWire} content='Wire' /> {wireAmount}
				</span>
				<div>Cost: {formattedCost}</div>
			</div>
		)
	}
}