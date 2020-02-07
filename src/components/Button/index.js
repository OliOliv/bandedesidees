import React, { Fragment } from 'react';
import Link from 'next/link';

class Button extends React.Component {
	renderButton = () => {
		if (this.props.link) {
			return (
				<Link href={this.props.link}>
					<button className="button">{this.props.text}</button>
				</Link>
			);
		} else {
			return (
				<button button className="button">
					{this.props.text}
				</button>
			);
		}
	};

	render() {
		return (
			<Fragment>
				{this.renderButton()}

				<style jsx global>{`
					.button {
						display: -ms-flexbox;
						display: flex;
						background: transparent;
						-ms-flex-pack: center;
						width: auto;
						padding: 15px;
						border: solid 2px black;
						margin: 3rem auto 0 auto;
						font-family: roboto;
						font-weight: bold;
						text-transform: uppercase;
						color: black;
						text-align: center;
						letter-spacing: 0.2rem;
						border-radius: 3px;
						cursor: pointer;
						box-shadow: 0px 4px 4px 0 #dcdcdc;
					}

					.button:hover {
						color: white;
						border: solid 2px black;
						background-color: black;
						transition: 0.3s;
					}
				`}</style>
			</Fragment>
		);
	}
}

export default Button;
