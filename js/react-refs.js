let { Component } = React;
let { render } = ReactDOM;

class MyForm extends Component{
	constructor(...x){
		super(...x);
		this.state = { userName: "" };
	}
	handleChange(e){
		this.setState({ userName: e.target.value});
	}

	render(){
		return(
			<input ref={ (c) => { this._input = c } }
					value={ this.state.userName }
					onChange={ this.handleChange.bind(this) } />
		)
	}
	componentDidMount(){
		this._input.focus();
	}
}
render(
	<MyForm />,
	document.getElementById("react-refs")
)