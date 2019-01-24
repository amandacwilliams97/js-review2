/*
    Amanda Williams
    January 24, 2019
    328/js-review2.js
 */
/*
The == operator compares objects by identity.
 But sometimes you’d rather compare the
 values of their actual properties. Write a
 function objEquals that takes two objects
 and returns true only if they have the same
  properties and property values. The
  Object.keys function might be useful!
  Test your function thoroughly.
 */
function objEquals(obj1, obj2) {
    Object.keys(obj1);
    Object.keys(obj2);
}

/*
Write a method flatten() can take an
array of arrays and return a single
array that has all the elements of the
original arrays. You should utilize the
reduce() method and the concat() method.
 */
function flatten(arr) {
    arr.reduce();
}

//Call and test functions
//create objects
var obj1 = "Separate Vixen.";
var obj2 = "Separate Vixen.";
objEquals(obj1, obj2);

//create and array of arrays
var arr = array();
flatten(arr);