/********

Meetup API Wrapper Module

For use on #JS-Enabled newbie-mapper project for CodeNewbie.com

********/

var Meetup = (function() {
  // initialize default variables for API calls
  var host = "https://api.meetup.com",
      apiKey = "",

      // Accepts object of parameters and returns a query string
      getParams = function(params) {
        return Object.keys(params).map(function(key, index) {
          return (index > 0 ? "&" : "") + key + "=" + params[key];
        }).join("");
      },

      // Returns the request URL for an API call to Meetup
      requestURL = function(host, method, params) {
        return host + method + "?" + getParams(params) + "&key=" + apiKey;
      },

      // Initiates API call to Meetup API using a method and parameters
      // and performs callback function on the response (if successful)
      getResponse = function(method, params, callback) {
        var url = requestURL(host, method, params);
        $.get(url, function(response) {
          if(response.status === "400 Bad request") {
            console.error("(Meetup Error) Bad Request:", response.details);
            return;
          } else {
            return callback(response);
          }
        }, "jsonp");
      },

      // Sets API Key for requests. Required for API successful API calls
      setKey = function(key) {
        apiKey = key;
      },

      // Searches for recent and upcoming public events hosted by Meetup groups.
      // Visit http://www.meetup.com/meetup_api/docs/2/open_events/ for more information, and for list of request parameters
      getOpenEvents = function(params, callback) {
        return getResponse("/2/open_events", params, callback);
      }
  
  // Revealing Module object interface
  return {
    setKey: setKey,
    getOpenEvents: getOpenEvents
  }
})();