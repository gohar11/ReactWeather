var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/">Get Weather</IndexLink>
                <IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/about">About</IndexLink>
                <IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/examples">Examples</IndexLink>
            </div>
        );
    }
});


module.exports = Nav;