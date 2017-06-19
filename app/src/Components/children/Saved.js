// Include React
var React = require("react");

var Saved = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              Saved articles are going to go here.
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Saved;
