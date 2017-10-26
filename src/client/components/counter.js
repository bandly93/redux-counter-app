//create react class with a counter.
import React, { Component } from 'react';
import {connect} from "react-redux";
import {addOneAct, minusOneAct} from '../redux/counterModule.js';

class Counter extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				{this.props.counter.counter}
				<button className = "left-button" onClick = {this.props.addOneAct}>+</button>
				<button className = "right-button" onClick = {this.props.minusOneAct}>-</button>
			</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		counter : state.counterReducer
	}
}

const mapDispatchToProps =(dispatch) => {
	return {
		addOneAct: () => dispatch(addOneAct()),
		minusOneAct: () => dispatch(minusOneAct())
	}

}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);
