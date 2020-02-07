import React, { Fragment } from 'react';
import Link from 'next/link';
import Thumbnail from 'src/components/Thumbnail';
import path2 from 'src/pathToback.js';
import Button from 'src/components/Button';

class HomePage extends React.Component {
	state = {
		lastEvent: []
	};
	getLastEvent = async function() {
		const res = await fetch(path2 + 'events/getlastevent');
		if (res.status === 201) {
			const data = await res.json();
			const lastEvent = data.lastEvent[0];
			this.setState({ lastEvent });
		}
		if (res.status === 401) {
			//redirection
		}
	};

	componentDidMount() {
		this.getLastEvent();
	}

	render() {
		const link = { pathname: '/bdi', query: { name: this.state.lastEvent.nom } };
		return (
			<Fragment>
				<Thumbnail event={this.state.lastEvent} />
				<Button text="Plus d'information" link={link} />
			</Fragment>
		);
	}
}

export default HomePage;
