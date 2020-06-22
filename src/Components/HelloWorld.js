import React from 'react';

class HelloWorld extends React.Component {
	render()
	{
		return (
				<h1 className="py-5">Hello {this.props.name}</h1>
			)
	}
}

export default HelloWorld;