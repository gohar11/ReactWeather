var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({isLoading:true});
        openWeatherMap.getTemp(location).then(function (data) {
            that.setState({
                location: data.name,
                temp: data.main.temp,
                isLoading:false
            });
        }, function (errorMessage) {
            that.setState({isLoading:false});
            alert("No found city");
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;
        function renderMessage(e) {
            if(isLoading){
                return <h5>Fetching Data...</h5>;
            } else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});


module.exports = Weather;