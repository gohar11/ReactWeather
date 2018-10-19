var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false,
            errorMessage: undefined
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading:true,
        });
        openWeatherMap.getTemp(location).then(function (data) {
            that.setState({
                location: data.name,
                temp: data.main.temp,
                isLoading:false,

            });
        }, function (e) {
            that.setState({
                isLoading:false,
                errorMessage: e.message
            });
        });
    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;
        function renderMessage(e) {
            if(isLoading){
                return <h3 className="text-center">Fetching Data...</h3>;
            } else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            console.log(errorMessage);
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});


module.exports = Weather;