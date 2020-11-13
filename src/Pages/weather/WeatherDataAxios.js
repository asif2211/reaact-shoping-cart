import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../action";
import "weather-icons/css/weather-icons.css";
import { Container, Weather, ApiData, Icon, Form, Input,Temp,Description } from "./style";
const axios = require("axios").default;

class WeatherData extends Component {
  
  constructor() {
    super();
    this.state = {
      person : '',
    }
    this.weatherIcon = {
        Thunderstorm : 'wi-thunderstorm',
        Drizzle : 'wi-sleet',
        Rain : 'wi-storm-showers',
        Snow : 'wi-snow',
        Atmosphere : 'wi-fog',
        Clear : 'wi-day-sunny',
        Clouds : 'wi-day-fog',
        
    }
  }

  componentDidMount() {
    
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=3ddd8d8c949493d63136ea31464a9e17`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons: persons});
      })
    //this.props.requestApiData();
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
  render() {
   
    console.log(this.state.person.name)
    if (this.props.apiData) {
      return (
        <Container>
          <Weather>
            <Form>
              <Input />
              <Input />
              <button onClick={this.componentDidMount}>Submit</button>
            </Form>

            <ApiData>
              <h3>{this.props.apiData && this.props.apiData.name}</h3>
              <h3>
                {this.props.apiData.sys && this.props.apiData.sys["country"]}
              </h3>
            </ApiData>
            <Icon>
              <i class={`wi ${this.changeWeatherIcon(this.props.apiData.sys && this.props.apiData.weather[0]['id'])}`}></i>
            </Icon>
            <Temp>
                <h3>{this.celcTemp(this.props.apiData.main&&this.props.apiData.main['temp'])}&deg;</h3>
            </Temp>
            {this.minmaxTemp(this.celcTemp(this.props.apiData.main&&this.props.apiData.main['temp_min']),this.celcTemp(this.props.apiData.main&&this.props.apiData.main['temp_max']))}
            <Temp>
                <Description>{this.props.apiData.sys && this.props.apiData.weather[0]['description']}</Description>
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
