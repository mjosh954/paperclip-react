import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Manufacturing from './components/Manufacturing';
import Business from './components/Business';

class App extends Component {

  state = {
    wire: 1000,
    inventory: 0,
    clipsSold: 0,
    transaction: 0,
    totalClipsProduced: 0,
    price: 0.25,
    funds: 0.00,
    demand: 5,
    wirePriceCounter: 0,
    wirePriceTimer: 0,
    wireBasePrice: 14,
    wireCost: 14,
    wireSupply: 1000,
    wirePurchaseCount: 0,
    marketingLevel: 1,
    marketingEffectiveness: 1,
    demandBoost: 1,
    prestigeU: 0,
    time: 0
  }

  componentDidMount() {
    const loopId = setInterval(this._gameLoop ,100)
    this.setState({ loopId: loopId });
  }

  componentWillUnmount() {
    clearInterval(this.state.loopId);
  }

  _gameLoop = () => {
    this.setState({ time: this.state.time + 1, wirePriceTimer: this.state.wirePriceTimer + 1 })
    this._adjustWirePrice();
    if(this.state.inventory > 0 && Math.random() < (this.state.demand / 100)) {
      const toSell = Math.floor(0.7 * Math.pow(this.state.demand, 1.15));
      this._sellClips(toSell);
    }
    this._calculateDemand();
  }

  _calculateDemand = () => {
    const { marketingEffectiveness, marketingLevel, price, demandBoost, prestigeU } = this.state;
    const marketing = (Math.pow(1.1, marketingLevel - 1));
    const demand = (((0.8 / price) * marketing * marketingEffectiveness)* demandBoost);
    this.setState({
      demand: demand + ((demand / 10) * prestigeU) 
    })
  }

  _sellClips = number => {
    if(number > this.state.inventory) {
      const transaction =  (Math.floor((this.state.inventory * this.state.price) * 1000)) / 1000;
      this.setState({
        transaction: transaction,
        funds: (Math.floor((this.state.funds + transaction) * 100)) / 100,
        income: this.state.income + transaction,
        clipsSold: this.state.clipsSold + this.state.inventory,
        inventory: 0
      })
    } else {
      const transaction = (Math.floor((number * this.state.price)*1000)) / 1000;    
      this.setState({
        funds: (Math.floor((this.state.funds + transaction) * 100)) / 100,
        income: this.state.income + transaction,
        clipsSold: this.state.clipsSold + number,
        inventory: this.state.inventory - number
      })
    }
  }

  _createClip = () => {
    this.setState({
      totalClipsProduced: this.state.totalClipsProduced + 1,
      inventory: this.state.inventory + 1,
      wire: this.state.wire - 1
    });
  }

  _buyWire = () => {
    if(this.state.funds >= this.state.wireCost) {
      this.setState({
        wirePriceCounter: 0,
        wire: this.state.wire + this.state.wireSupply,
        funds: this.state.funds - this.state.wireCost,
        wirePurchaseCount: this.state.wirePurchaseCount + 1,
        wireBasePrice: this.state.wireBasePrice + 0.05
      })
    }
  }

  _adjustWirePrice = () => {
    if(this.state.wirePriceTimer > 250 && this.state.wireBasePrice > 15) {
      const { wireBasePrice } = this.state;
      this.setState({
        wireBasePrice: wireBasePrice - (wireBasePrice / 1000),
        wirePriceTimer: 0
      })
    }

    if(Math.random() < 0.015) {
      const updatedCount = this.state.wirePriceCounter + 1;
      const wireAdjust = 6 * (Math.sin(updatedCount));
      this.setState({
        wirePriceCounter: updatedCount,
        wireCost: Math.ceil(this.state.wireBasePrice + wireAdjust)
      });
    }
  }

  _adjustPrice = newPrice => this.setState({ price: newPrice });

  render() {
    return (
      <div className="App">
        {this.state.inc}
        <h2>Paperclips: {this.state.totalClipsProduced}</h2>
        <button disabled={this.state.wire <= 0} onClick={this._createClip}>Make a Paperclip</button>
        <Business funds={this.state.funds}
          price={this.state.price} 
          demand={this.state.demand}
          adjustPrice={this._adjustPrice} 
          inventory={this.state.inventory} />
        <Manufacturing wire={this.state.wire} 
          handleBuyWire={this._buyWire} 
          wireCost={this.state.wireCost} />
      </div>
    );
  }
}

export default App;
