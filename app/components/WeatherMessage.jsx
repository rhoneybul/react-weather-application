var React = require("react");

var WeatherMessage = ({temp, location}) => {
    // var { temp, location } = props;
    if( temp == "err" && location == "err"){
        return(
            <div>
                <h3>City Not Found.</h3>
            </div>
        );
    } else{
        return(
            <div>
                <h3>It's {temp} degrees in {location}!</h3>
            </div>
        );
    }
}

module.exports = WeatherMessage;