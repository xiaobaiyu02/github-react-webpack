var WithoutLink = React.createClass({
	getInitialState: function(){
		return { value: "Hello withoutLink" };
	},
	handleChange: function(e){
		this.setState({ value: e.target.value })
	},
	render: function(){
		return(
			<div>
				<p>{ this.state.value }</p>
				<input type="text" value={ this.state.value } onChange={ this.handleChange }/>
			</div>
		)
	}
});

var WithLink = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function(){
		return { userName: "baibai", tel: "tel" };
	},
	render: function(){
		return(
			<form name="linkform">
				<section>
					<p>{ this.state.userName }</p>
					<input type="text" name="userName" valueLink={ this.linkState("userName") }/>
				</section>
				<section>
					<p>{ this.state.tel }</p>
					<input type="tel" name="tel" valueLink={ this.linkState("tel") }/>
				</section>

			</form>

		)
	}
});

var Temperature = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function(){
		return { c: 1 }
	},
	onCChange: function(newValue){
		this.setState({ c: newValue });
	},
	onFChange: function(newValue){
		this.setState({ c: f2c(newValue) });
	},
	render: function(){
		var temperatureC = {
			value: this.state.c,
			requestChange: this.onCChange
		};
		var temperatureF = {
			value: c2f(this.state.c),
			requestChange: this.onCChange
		};
		return(
			<div>
				<input type="number" name="temperatureC" valueLink={ temperatureC } />C°
				=
				<input type="number" name="temperatureC" valueLink={ temperatureF } />F°
			</div>
		)
	}
});

ReactDOM.render(
	<Temperature/>,
	document.getElementById("reactLink")
)