/*
 *  @name : Simple Password Generator
 *  @Description: Generates random passwords with a simple API.
 *  @Version: 1.2.0
 *
 *  @changelog: 
 *    
 *    1.2.0 : Added basic user options with sensible defaults
 *    1.1.0 : Documented the code a little more. Added a Changelog
 *    1.0.0 : A first release. 
*/
!(function(){
  
  _ = require('lodash-node');

  // Password defaults
  var defaults = {
    length : 8
  };

  /*
   * Generates a random password.
   */
  exports.generate = function(userOptions)
  {
    var options = _.assign(defaults, userOptions);

    // Generate a random number.
    var number = Math.random()

    // Convert this number into a string.
    var string = number.toString(36)

    // Grab a section of the string as the password
    var password = string.slice(-defaults['length']);

    // Return the password back!
    return password;
  }

})();