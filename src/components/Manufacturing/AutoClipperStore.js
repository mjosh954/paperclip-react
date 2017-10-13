import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
// import './Manufacturing.css';

export default class AutoClipperStore extends Component {
	render () {
		const { disabled, numOwned, cost, onPurchaseClick } = this.props;
		return (
			<div className='autoClipperStore'>
				<span>
					<Button size='mini' content='AutoClippers' disabled={disabled} onClick={onPurchaseClick} /> {numOwned}
				</span>
				<div>Cost: ${cost}</div>
			</div>
		)
	}
}