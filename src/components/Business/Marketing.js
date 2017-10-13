import React from 'react';
import { Button } from 'semantic-ui-react'

const Marketing = ({disabled, cost, onUpgrade, level}) => {

	return (
		<div className='marketing'>
			<span>
				<Button size='mini' disabled={disabled} onClick={onUpgrade} content='Marketing' /> Level: {level}
			</span>
			<div>Cost ${cost}</div>
		</div>
	);
};

export default Marketing;