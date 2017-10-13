import React, { Component } from 'react'

export default class Manufacturing extends Component {
	render() {
		return (
			<div>
				<h3>Manufacturing</h3>
				<hr />
				<div>
					<span>
						<button onClick={this.props.handleBuyWire}>Wire</button> {this.props.wire} inches
					</span>
				</div>
				<div>
					<span>
						Cost: {this.props.wireCost}
					</span>
				</div>
			</div>
		)
	}
}
