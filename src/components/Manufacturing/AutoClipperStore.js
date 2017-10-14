import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react';
// import './Manufacturing.css';

export default class AutoClipperStore extends PureComponent {

	render () {
		const { disabled, numOwned, cost, onPurchase } = this.props;
		return (
			<div className='autoClipperStore'>
				<span>
					<Button size='mini' content='AutoClippers' disabled={disabled} onClick={onPurchase} /> {numOwned}
				</span>
				<div>Cost: ${cost}</div>
			</div>
		)
	}
}