// Data only module
class WeatherData {
  constructor(cityName="Hong Kong") {
    this.cityName = cityName;
    this.list = [];
    
    this.apiKey = "9da4ab7247b9bfa529c947d04e087fc3";
    this.apiBase = "http://api.openweathermap.org/data/2.5";
    
    this.fetchCurrent();
    this.fetchForecast();
  }
  jsonURL(apiUrl) {
    return `${this.apiBase}${apiUrl}${this.cityName}&APPID=${this.apiKey}`;
  }
  // callback(weatherData)
  // weatherData: {cityName, weatherDescription}
  fetchCurrent(callback) {
    var apiUrl = "/weather?units=metric&q=";
    fetch(this.jsonURL(apiUrl))
      .then( (response) => response.json() )
      .then( (data) => {
        this.description = data.weather[0].description;
        callback && callback({
          cityName: this.cityName,
          weatherDescription: this.description
        })
      });
  }
  // callback(weatherData)
  // weatherData: {cityName, forecastList}
  fetchForecast(callback) {
    var apiUrl = "/forecast/daily?units=metric&q=";
    fetch(this.jsonURL(apiUrl))
      .then( (response) => {
        return response.json();
      })
      .then( (data) => {
        this.list.length = 0;
        for (var forecast of data.list) {
          this.list.push({
            date: new Date(forecast.dt * 1000),
            description: forecast.weather[0].description,
            tempature: forecast.temp.day
          });
        }
        callback && callback({
          cityName: this.cityName,
          forecastList: this.list
        })
      });
  }
}

// React View module
var WeatherNode = React.createClass({
  render() {
    return (
      <p>
        Hello <em>{this.props.city}</em>. It is <strong>{this.props.weather}</strong> today.
      </p>
    );
  }
});

var ForecastList = React.createClass({  
  render() {
    return (
      <div>
        <p>7 days forecast:</p>
        <ul>
          {this.props.forecastList.map( (item, i) => { return (
            <li key={i}>{Math.round(item.tempature)}C, {item.date.toDateString()}, {item.description}</li> 
          ) })}
        </ul>
      </div>
    );
  }
});

var CityInput = React.createClass({
  getInitialState() {
    return {value: 'Hong Kong'};
  },
  getDefaultProps() {
    return {
      sampleCities: ["London", "New York", "Beijing", "Sau Paulo", "Sydney", "Helsinki"]
    }
  },
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
    this.props.onChange(event.target.value);    
  },
  handleClick(event) {
    this.setState({
      value: event.target.text
    })
    this.props.onChange(event.target.text);
  },
  render() {
    return (
      <div>
        <input type='text' placeholder='City name...' value={this.state.value} onChange={this.handleChange} />
        <p>Sample:
        {this.props.sampleCities.map( (city, i) => {
          return <a key={i} className="sample-city" onClick={this.handleClick}>{city}</a>;
        })}         
        </p>
      </div>
    )
  }
});

var WeatherComponent = React.createClass({
  getInitialState() {
    return {
      city: "Somewhere",
      weatherDescription: "",
      forecastList: []
    }
  },
  refreshData(){
    var weather = this.props.source;  
    weather.fetchCurrent( (data) => {
      this.setState({
        city: data.cityName,
        weatherDescription: data.weatherDescription
      });          
    });
    
    weather.fetchForecast( (data) => {
      this.setState({
        city: data.cityName,
        forecastList: data.forecastList
      });        
    });
  },
  handleChange(newCityName) {
    var weather = this.props.source;
    weather.cityName = newCityName;
    
    this.refreshData();
  },
  componentDidMount() {
    this.refreshData();
  },
  render() {
    return (
      <div>
        <CityInput onChange={this.handleChange} />
        <WeatherNode city={this.state.city} weather={this.state.weatherDescription} />
        <ForecastList forecastList={this.state.forecastList} />
      </div>
    );
  }
});

// Using our classes

// data instance
var weatherData = new WeatherData("Hong Kong");

// view rendering
ReactDOM.render(
  <WeatherComponent source={weatherData} />,
  document.getElementById('weather-forecast')
);


// fetch("http://10.1.41.16:8081/login",{
//   method: "POST",
//   body: JSON.stringify({
//     username: "baiyu",
//     password: "111111"
//   })
// }).then( (res) => {
//   return res.json();
// }, (err) => {
//   console.log(err);
// })
// .then( (data) => {
//   console.log(111,data)
// })
// fetch("http://10.1.41.16:8081/thor/pools")
//   .then( (response) => {
//     console.log(222,response);
//     return response.json();
//   })
//   .then( (data) => {
//     console.log(222,data)
//   })

