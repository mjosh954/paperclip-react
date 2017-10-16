import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';
import numeral from 'numeral';
// import './Manufacturing.css';

export default class AutoClipperStore extends PureComponent {

	render () {
		const { disabled, numOwned, cost, onPurchase } = this.props;
		const formattedCost = numeral(cost).format('$0,0.00');
		return (
			<div className='autoClipperStore'>
				<span>
					<Button size='mini' content='AutoClippers' disabled={disabled} onClick={onPurchase} /> {numOwned}
				</span>
				<div>Cost: {formattedCost}</div>
			</div>
		)
	}
}