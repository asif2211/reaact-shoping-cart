import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../action";
import "weather-icons/css/weather-icons.css";
import { Container, Weather, ApiData, Icon, Form, Input, Temp } from "./style";
import { REQUEST_API_DATA } from "../../action";

class WeatherData extends Component {
  constructor() {
    super();
    this.state = { city: "", country: "" };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };

    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  async componentDidMount() {
    if(this.state.city && this.state.country)
    {
      await this.props.requestApiData({
        type: REQUEST_API_DATA,
        payload: { city: this.state.city, country: this.state.country },
      });
    }
   
   
  }

  minmaxTemp = (min, max) =>
    min && max ? (
      <Temp>
        {min}
        {max}
      </Temp>
    ) : null;

  celcTemp = (cell) => (
    cell ? (<h3>{Math.floor(cell - 273.5)}&deg;</h3>):null
  )
    
  

  changeWeatherIcon = (type) => {
    if (this.state.city && this.state.country) {
      
      switch (true) {
        case type >= 200 && type <= 232:
          return this.weatherIcon.Thunderstorm;
          break;
        case type >= 300 && type <= 321:
          return this.weatherIcon.Drizzle;
          break;
        case type >= 500 && type <= 531:
          return this.weatherIcon.Rain;
          break;
        case type >= 600 && type <= 622:
          return this.weatherIcon.Snow;
          break;
        case type >= 701 && type <= 781:
          return this.weatherIcon.Atmosphere;
          break;
        case type === 800:
          return this.weatherIcon.Clear;
          break;
        case type >= 801 && type <= 804:
          return this.weatherIcon.Clouds;
          break;
        default:
          return null;
      }
    }
      else {
        switch (true) {
          case type >= 200 && type <= 232:
            return this.weatherIcon.Thunderstorm;
            break;
          case type >= 300 && type <= 321:
            return this.weatherIcon.Drizzle;
            break;
          case type >= 500 && type <= 531:
            return this.weatherIcon.Rain;
            break;
          case type >= 600 && type <= 622:
            return this.weatherIcon.Snow;
            break;
          case type >= 701 && type <= 781:
            return this.weatherIcon.Atmosphere;
            break;
          case type === 800:
            return this.weatherIcon.Clear;
            break;
          case type >= 801 && type <= 804:
            return this.weatherIcon.Clouds;
            break;
          default:
            return null;
      }
    }
  };

  handleCityChange(event) {
    const inputCity = event.target.value;
    this.setState({ city: inputCity });
  }
  handleCountryChange(event) {
    const inputCountry = event.target.value;
    this.setState({ country: inputCountry });
  }

  async handleCitySubmit(event) {
    event.preventDefault();
    if(this.state.city && this.state.country)
    {
      await this.props.requestApiData({
        type: REQUEST_API_DATA,
        payload: { city: this.state.city, country: this.state.country },
      });
    }
   else {
    await this.props.requestApiData({
      type: REQUEST_API_DATA,
      payload: { city: 'london', country: 'uk' },
    });
   }
  }

  render() {
    console.log(this.props.apiData);
    
    if (this.props.apiData) {
      return (
        <Container>
          <Weather>
            <Form>
              <Input
                placeholder="Enter City"
                value={this.state.city}
                onChange={(e) => this.handleCityChange(e)}
              />
              <Input
                placeholder="Enter City"
                value={this.state.country}
                onChange={(e) => this.handleCountryChange(e)}
              />
              <button onClick={(e) => this.handleCitySubmit(e)}>Submit</button>
            </Form>

            <ApiData>
              <h3>{this.props.apiData && this.props.apiData.name}</h3>
              <h3>
                {this.props.apiData.sys && this.props.apiData.sys["country"]}
              </h3>
            </ApiData>
           
            <Icon>
              <i
                className={`wi ${this.changeWeatherIcon(
                  this.props.apiData.sys && this.props.apiData.weather[0]["id"]
                )}`}
              ></i>
            </Icon>
           
            <Temp>
              
                {
                this.celcTemp(
                  this.props.apiData.main && this.props.apiData.main["temp"]
                )} 
              
              
            </Temp>
            <Temp>
              {this.minmaxTemp(
                this.celcTemp(
                  this.props.apiData.main && this.props.apiData.main["temp_min"]
                ),
                this.celcTemp(
                  this.props.apiData.main && this.props.apiData.main["temp_max"]
                )
              )}
            </Temp>
            <Temp>
              <p>
                {this.props.apiData.sys &&
                  this.props.apiData.weather[0]["description"]}
              </p>
            </Temp>
          </Weather>
        </Container>
      );
    } else {
      return (
        <div>
          <h3>loading..</h3>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({ apiData: state.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
