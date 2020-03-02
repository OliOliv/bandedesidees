import React, { Fragment } from 'react';
import Link from 'next/link';

class Button extends React.Component {
	renderButton = () => {
		const { link, type, text } = this.props;
		if (link) {
			return (
				<Link href={link}>
					<button className="button">{text}</button>
				</Link>
			);
		} else {
			return (
				<button type={type ? type : 'button'} className="button">
					{text}
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
