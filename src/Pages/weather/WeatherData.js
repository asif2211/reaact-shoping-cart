import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../action";
import "weather-icons/css/weather-icons.css";
import { Container, Weather, ApiData, Icon } from "./style";
class WeatherData extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    console.log(this.props.apiData);

    if (this.props.apiData) {
      return (
        <Container>
          <Weather>
            <ApiData>
              <h3>
                {this.props.apiData.sys && this.props.apiData.sys["country"]}
              </h3>

              <h3>{this.props.apiData && this.props.apiData.name}</h3>
            </ApiData>
            <Icon>
              <i class="wi wi-day-sunny"></i>
            </Icon>
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
