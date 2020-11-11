import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../action";
import "weather-icons/css/weather-icons.css";
import { Container, Weather, ApiData, Icon, Form, Input,Temp } from "./style";
import { REQUEST_API_DATA } from "../../action";

class WeatherData extends Component {
  constructor() {
    super();
    this.state = {city: 'Bahawalpur, PK'}
    this.weatherIcon = {
        Thunderstorm : 'wi-thunderstorm',
        Drizzle : 'wi-sleet',
        Rain : 'wi-storm-showers',
        Snow : 'wi-snow',
        Atmosphere : 'wi-fog',
        Clear : 'wi-day-sunny',
        Clouds : 'wi-day-fog',
        
    }

    this.handleCityChange = this.handleCityChange.bind(this);
  }

 async componentDidMount() {
   await this.props.requestApiData(
      {type: REQUEST_API_DATA, payload: {city: this.state.city}}
    );
  }

  minmaxTemp = (min, max) => (
    <Temp>
      <h3>{min}&deg;</h3>
      <h3>{max}&deg;</h3>
    </Temp>
  );

  celcTemp = (cell)=>{
   
    return Math.floor(cell-273.5)
  }
  
  changeWeatherIcon = (type)=> {
    switch(true){
        case type >=200 && type <=232:
          return this.weatherIcon.Thunderstorm;
        break;
        case type >=300 && type <=321:
            return this.weatherIcon.Drizzle;
        case type >=500 && type <=531:
            return this.weatherIcon.Rain;
        case type >=600 && type <=622:
            return this.weatherIcon.Snow;
        case type === 800:
            return this.weatherIcon.Clear;
        case type >=801 && type <=804:
            return this.weatherIcon.Clouds;
        default:
            return null
    }
    
  }

  handleCityChange(event) {
    const inputCity = event.target.value;
    this.setState({'city': inputCity});
  }

  async handleCitySubmit(event) {
    event.preventDefault();
    await this.props.requestApiData(
      {type: REQUEST_API_DATA, payload: {city: this.state.city}}
    );
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
                    onChange={(e) => this.handleCityChange(e)} />
              <button onClick={(e) => this.handleCitySubmit(e)}>Submit</button>
            </Form>

            <ApiData>
              <h3>{this.props.apiData && this.props.apiData.name}</h3>
              <h3>
                {this.props.apiData.sys && this.props.apiData.sys["country"]}
              </h3>
            </ApiData>
            <Icon>
              <i className={`wi ${this.changeWeatherIcon(this.props.apiData.sys && this.props.apiData.weather[0]['id'])}`}></i>
            </Icon>
            <Temp>
                <h3>{this.celcTemp(this.props.apiData.main&&this.props.apiData.main['temp'])}&deg;</h3>
            </Temp>
            {this.minmaxTemp(this.celcTemp(this.props.apiData.main&&this.props.apiData.main['temp_min']),this.celcTemp(this.props.apiData.main&&this.props.apiData.main['temp_max']))}
            <Temp>
                <p>{this.props.apiData.sys && this.props.apiData.weather[0]['description']}</p>
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

const mapStateToProps = (state) => ({ apiData: state.data.data });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ requestApiData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);
