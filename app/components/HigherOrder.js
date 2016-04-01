import React from 'react';
import Transis from 'transis';
import createHigherOrderComponent from '../createHigherOrderComponent';

class TransisView extends React.Component {
  render () {
    console.debug('render transis view')
    return <div>
      This is a view for transis model.
      <br/><br/>Name: {this.props.vehicle.name}
      <br/><br/>Color: {this.props.vehicle.color}
    </div>
  }
}

const TransisViewHigherOrder = createHigherOrderComponent(
  TransisView,
  {
    propsMixin: Transis.ReactPropsMixin({
      vehicle: ['color']
    })
  }
);

class App extends React.Component {
  constructor () {
    super();
  }
  render() {
    return <div style={{display: 'inline-block', border: '1px solid green', margin: 10, padding: 10}}>
      <h2> Higher Order</h2>
      <TransisViewHigherOrder vehicle={this.props.vehicle}/>
      <button onClick={()=> { this.props.vehicle.name = 'GMC'; this.props.vehicle.color = 'yellow'}} style={{padding: 20, fontSize: 20}}>change name</button>
      <button onClick={()=> { this.props.vehicle.color = 'green'}} style={{padding: 20, fontSize: 20}}>change color</button>
      <button onClick={()=> { this.props.vehicle.color = 'yellow';
      this.props.vehicle.name = 'Honda'}} style={{padding: 20, fontSize: 20}}>change Both</button>
    </div>
  }
}

export default createHigherOrderComponent(
  App,
  {
    stateMixin: Transis.ReactStateMixin(AppState, {
      vehicle: ['name']
    })
  }
);