var React = require('react');


// var About = React.createClass({
//     render:function(){
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h3>About Page</h3>
            <h3>Welcome to about page</h3>
        </div>
    );
};


module.exports = About;