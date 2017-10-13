import React, { Component } from 'react'
import { Segment, Divider, Button } from 'semantic-ui-react'

export default class Manufacturing extends Component {
	render() {
		const { funds, wireCost, handleBuyWire, wire } = this.props;
		return (
			<Segment raised>
				<h3>Manufacturing</h3>
				<Divider />
				<div>
					<span>
						<Button size='mini' disabled={funds < wireCost} onClick={handleBuyWire} content='Wire' /> {wire}
					</span>
				</div>
				<div>
					<span>
						Cost: {wireCost}
					</span>
				</div>
			</Segment>
		)
	}
}
