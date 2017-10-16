import React, { PureComponent } from 'react';
import numeral from 'numeral';
import { Button } from 'semantic-ui-react'

export class Marketing extends PureComponent {
	render() {
		const { disabled, cost, onUpgrade, level } = this.props;
		const formattedCost = numeral(cost).format('$0,0.00');
		return (
			<div className='marketing'>
				<span>
					<Button size='mini' disabled={disabled} onClick={onUpgrade} content='Marketing' /> Level: {level}
				</span>
				<div>Cost {formattedCost}</div>
			</div>
		)
	}
};

export default Marketing;