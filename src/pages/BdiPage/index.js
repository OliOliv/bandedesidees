import React, { Component, Fragment } from 'react';
import path2 from 'src/pathToback.js';
import BdiContent from './components/BdiContent';

class BdiPage extends Component {
	state = {
		oneEvent: [],
		speakers: [],
		booksOfEvent: [],
		photographyOfEvent: [],
		illustrationsOfEvent: []
	};

	getOneEvent = async function() {
		const res = await fetch(path2 + `events/getoneevent/${this.props.eventName}`);
		if (res.status === 201) {
			const data = await res.json();
			const oneEvent = data.event[0];
			this.setState({ oneEvent });
		}
		if (res.status !== 201) {
		}
	};

	getSpeakersOfEvent = async function() {
		const res = await fetch(path2 + `speakers/getspeakersofevent/${this.props.eventName}`);
		if (res.status === 201) {
			const data = await res.json();
			const speakers = data.speakers;
			this.setState({ speakers });
		}
		if (res.status !== 201) {
		}
	};

	getBooksOfEvent = async function() {
		const res = await fetch(path2 + `books/getBooksOfEvent/${this.props.eventName}`);
		if (res.status === 201) {
			const data = await res.json();
			const booksOfEvent = data.books;
			this.setState({ booksOfEvent });
		}
		if (res.status !== 201) {
		}
	};

	getPhotographyOfEvent = async function() {
		const res = await fetch(path2 + `photography/getPhotographyOfEvent/${this.props.eventName}`);
		if (res.status === 201) {
			const data = await res.json();
			const photographyOfEvent = data.photography;
			this.setState({ photographysOfEvent });
		}
		if (res.status !== 201) {
		}
	};

	getIllustrationsOfEvent = async function() {
		const res = await fetch(path2 + `illustrations/getIllustrationsOfEvent/${this.props.eventName}`);
		if (res.status === 201) {
			const data = await res.json();
			const illustrationsOfEvent = data.illustrations;
			this.setState({ illustrationsOfEvent });
		}
		if (res.status !== 201) {
		}
	};

	componentDidMount() {
		this.getOneEvent();
		this.getSpeakersOfEvent();
		this.getBooksOfEvent();
		this.getPhotographyOfEvent();
		this.getIllustrationsOfEvent();
	}

	render() {
		const { oneEvent, speakers, booksOfEvent, illustrationsOfEvent } = this.state;
		return (
			<Fragment>
				<BdiContent
					event={oneEvent}
					speakers={speakers}
					booksOfEvent={booksOfEvent}
					illustrationsOfEvent={illustrationsOfEvent}
				/>
			</Fragment>
		);
	}
}

export default BdiPage;
