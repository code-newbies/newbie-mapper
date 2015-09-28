/***************

Main application javascript contained here

***************/

(function () {

  // Example setup for Meetup API wrapper
  var key = "YOUR MEETUP API KEY HERE";
  Meetup.setKey(key);
  
  // Example basic react component
  var App = React.createClass({
    render: function() {
      return (
        <div className="container">
          <h1>Newbie Mapper</h1>
          <p>Here is some placeholder text!</p>
        </div>
      )
    }
  });
  
  // Example basic react render
  React.render(
    <App />, document.getElementById("main")
  );
})();