// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // Check obj variable against data types:
  // case: null
    //return null
  if (obj === null) {
    return 'null';
  }
  // case: number or boolean or string
    //return number.toString()
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // case: undefined, f(x)
    //no return value
  if (obj === undefined || typeof obj === 'function' ) {
    //nothing
  }
  // case: array
    //method:   iterate through, if nested - call itself
    //                           else
    //return:
  if (Array.isArray(obj)) {
    var returnValue = '[';

    for (var i = 0; i < obj.length; i++) {
      returnValue += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        returnValue += ',';
      }
    }

    return returnValue + ']';
  }
  // case: object
    //method:   iterate through, if nested - call itself
    //                           else
    //return:
  if (typeof obj === 'object') {
    var returnValue = '{';
    var count = 0;

    for (var x in obj) {
      if ( typeof stringifyJSON(obj[x]) === 'undefined' ) {
          //do nothing
      } else {
        if (count > 0) {
          returnValue += ',';
        }
        returnValue += '"' + x + '":' + stringifyJSON(obj[x]);
        count ++;
      }
    }

    return returnValue + '}';
  }


};
