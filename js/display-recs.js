var React = require('react');
var connect = require('react-redux').connect;
var store = require('./store');
var actions = require('./actions');
var Recommendations = require('./recommendations');


var DisplayRecs = React.createClass({
  render: function() {
    var recsLoop = [];

    if (this.props.recommendations) {
      for (var i=0; i < this.props.recommendations.length; i++) {
        recsLoop.push(<Recommendations key={i} item={this.props.recommendations[i]} />)
      }
    }
    return (
      <div className="DisplayRecs row">
        {recsLoop}
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
    return {
        recommendations: state.recommendations
    };
};

var Container = connect(mapStateToProps)(DisplayRecs);

module.exports = Container;
module.exports.DisplayRecs = DisplayRecs;
