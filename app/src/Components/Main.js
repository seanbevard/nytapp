// Include React
var React = require("react");
var Saved = require("./children/Saved");
var Search = require("./children/Search");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>New York Times Search</strong></h2>
          <p><em>Version: React.0</em></p>
          <hr />
        </div>
        <div className="row">
          <Search />
          <Saved />
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
