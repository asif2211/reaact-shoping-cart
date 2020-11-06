import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../action";

 class WeatherData extends Component {
    constructor(){
        super()
       
    }
    componentDidMount(){
        this.props.requestApiData();
    }
        render() {

        return (
            <div>
                {this.props.apiData.name}
            </div>
        )
    }
}

const mapStateToProps = state => ({ apiData: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);