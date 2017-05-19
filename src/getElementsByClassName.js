// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // initialize array of class names
  // create function
      // check class list for classname
      // if classname is found, push to array
      // loop through elements in childnodes
      // recursive call on each childnode

  if (elementArr === undefined) {
    var elementArr = [];
  }

  var searchElements = function(element) {
    if (element.classList === undefined) {
      // if undefined, do nothing
    } else if (element.classList.contains(className)) {
      elementArr.push(element);
    }

    for ( var i = 0; i < element.childNodes.length; i++) {
      searchElements(element.childNodes[i]);
    }
  };

  searchElements(document.body);
  return elementArr;
};
