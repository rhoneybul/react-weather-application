var React = require("react");

// var About = React.createClass({
//     render: function() {
//         return(
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return(
        <div>
            <h1 className="text-centered">About</h1>
            <p>This is a weather application, built on react</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript Framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map for the Weather API.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;