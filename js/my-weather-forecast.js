let { Component } = React;
let { render } = ReactDOM;
 
class WeatherData{
	constructor( cityName="Hong Kong" ){
		this.cityName = cityName;
		this.list = [];

		this.apiKey = "9da4ab7247b9bfa529c947d04e087fc3";
		this.apiBase = "http://api.openweathermap.org/data/2.5";

		this.fetchCurrent();
		this.fetchForecast();
	}
	jsonURL(apiUrl){
		return `${this.apiKey}${apiUrl}${this.cityName}&APPID=${this.apiKey}`;
	}
	fetchCurrent(callback){
		var apiUrl = "/weather?units=metric&q=";
		fetch(this.jsonURL(apiUrl)).then( (response)=>response.json(); )
	}
}

class CityInput extends Component{
	constructor(...x){
		super(...x);
		this.state = {
			value: "Hong Kong"
		};
	}
	handleChange(e) {
		let { value } = e.target;
		this.setState({ value });
		this.props.onChange(value)
	}
	handleClick(e){
		this.setState({ value: e.target.text });
	}
	render(){
		return(
			<div>
				<input type="text" placeholder="City name..." value={ this.state.value } onChange={ this.handleChange.bind(this) } />
				<p>Sample:
					{this.props.sampleCities.map( (city, i) => {
						return <a key={i} className="cityName" onClick={ this.handleClick.bind(this) }>{city}</a>;
					})}
				</p>
			</div>
		)
	}
};
CityInput.defaultProps = { sampleCities: ["London", "New York", "Beijing", "Sau Paulo", "Sydney", "Helsinki"] }
// CityInput.propTypes = { initialCount: React.PropTypes.bool };

class WeatherNode extends Component{
	constructor(...x){
		super(...x);
	}
	render(){
		return(
			<p>Hello, <em>{ this.props.city }</em>. It is <strong>{ this.props.weather }</strong> today.</p>
		)
	}
}

class ForecastList extends Component{
	constructor(...x){
		super(...x);
	}
	render(){
		return(
			<div>
				<p>7 days forecast:</p>
				<ul>{this.props.forecastList.map( (item, i) => {
						return(
							<li key={i}>{ Math.round(item.tempature) }C, {item.date.toDateString()}, {item.description}</li>
						)
					})}
				<ul>
			</div>
		)
	}
}

class WeatherComponent extends Component{
	constructor(...x){
		super(...x);
		this.state = {
			city: "SomeWhere",
			weatherDescription: "",
			forecastList: []
		};
	}
	refreshData(){
		let { source } = this.props;
		source.fetchCurrent( (data) => {
			this.setState({
				city: date.cityName,
				weatherDescription: data.weatherDescription
			})
		});
		source.fetchForecast( (data) => {
			this.setState({
				city: date.cityName,
				forecastList: data.forecastList
			})
		});
	}
	handleChange(newCityName){
		let { source } = this.props;
		source.cityName = newCityName;

		this.refreshData();
	}
	render(){
		return(
			<CityInput onChange={ this.handleChange }/>
			<WeatherNode city={ this.state.city } weather={ this.state.weatherDescription } />
			<ForecastList forecastList={ this.state.forecastList } />
		)
	}
}

var weatherData = new WeatherData("Hong Kong")
render(
	<WeatherComponent source={ weatherData } />
	document.getElementById("weather-forecast")
);

console.log(CityInput)
console.log(CityInput.__proto__ === Component)
console.log(Component.prototype)