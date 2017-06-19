// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Search = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Search For Articles</h3>
            </div>
            <div className="panel-body">
              <p>Search For Articles</p>
              <p>
                Search form goes here.
              </p>

            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;
