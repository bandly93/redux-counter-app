import React, { Component} from "react";
import ReactDOM from "react-dom";
import Counter from "./client/components/counter.js";
import {Provider} from "react-redux";
import {counterReducer} from './client/redux/counterModule.js';
import {combineReducers,compose,createStore} from "redux";


let reducers = combineReducers({
	counterReducer
})


let store = createStore(reducers,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


class App extends Component{
	render(){
		return(
			<div>
				<Counter />
			</div>
		)
	}
}

export default App;

ReactDOM.render(
	<Provider store = {store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
