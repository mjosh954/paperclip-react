import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react'

export default class WireStore extends PureComponent {
	render () {
		const { wireCost, wireAmount, handleBuyWire, disabled } = this.props;
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