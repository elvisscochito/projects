import React from 'react';

import './App.css';

import Form from './components/Form.jsx';
import CardList from './components/CardList.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			profiles: []
		};
	}

	addNewProfile = (profileData) => {
		this.setState(previousState => ({
			profiles: [...previousState.profiles, profileData]
		}));
	};

	render() {
		return (
			<div className="App">
				<header>
					<h1>GitHub Cards app</h1>
				</header>
				
				<Form onSubmit={this.addNewProfile} />
				<CardList profiles={this.state.profiles} />
    		</div>
		);
	};
}

export default App;
