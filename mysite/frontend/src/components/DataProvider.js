import React, { Component } from "react";
import PropTypes from "prop-types";


class DataProvider extends Component {

	// Some error is happening in propTypes have to debug.
	// static proptypes = {
	// 	endpoint : PropTypes.string.isRequired,
	// 	render : PropTypes.function.isRequired,
	// };

	state = {
		data : [],
		loaded : false,
		placeholder : "Loading... ",
	};

	componentDidMount(){
		fetch(this.props.endpoint).then(
			response => {
				if (response.status != 200){
					return this.setState({ placeholder: "Something went wrong." });
				}
				return response.json();
			}
		).then(
			data => this.setState({ data: data, loaded: true })
		)
	}

	render(){
		const { data, loaded, placeholder } = this.state;
		return loaded ? this.props.render(data) : <p>{placeholder}</p>;
	}
}

export default DataProvider;
