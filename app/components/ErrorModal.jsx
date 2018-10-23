var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {
        var {message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4 id="modalTitle">404</h4>
                <p class="lead">{message}</p>
                <button className=" button hollow" data-close="">okay</button>
            </div>
        )
    }
});

module.exports = ErrorModal;