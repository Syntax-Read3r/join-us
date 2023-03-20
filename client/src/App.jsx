import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { render } from "../../server/app";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { apiResponse: "" };
	}

	callAPI() {
		fetch("http://localhost:9000/testAPI")
			.then((res) => res.text)
			.then((res) => this.setState({ apiResponse: res }));
	}

	componentWillMount() {
		this.callAPI;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} alt="logo" className="App-logo" />
				</header>

				<p>{this.state.apiResponse}</p>
			</div>
		);
	}
}

export default App;
