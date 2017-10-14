import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react'

export class Marketing extends PureComponent {
	render() {
		const { disabled, cost, onUpgrade, level } = this.props;
		return (
			<div className='marketing'>
				<span>
					<Button size='mini' disabled={disabled} onClick={onUpgrade} content='Marketing' /> Level: {level}
				</span>
				<div>Cost ${cost}</div>
			</div>
		)
	}
};

export default Marketing;