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
function objEquals(obj1, obj2) { //NOTHING RIGHT
    let output = true; //If no tests are wrong, objects match

    let keys1= Object.keys(obj1);
    let keys2= Object.keys(obj2);
    let vals1= Object.values(obj1);
    let vals2= Object.values(obj2);

    if(keys1.length!==keys2.length) {
        output=false;
    }
    else {
        for(let i=0; i<keys1.length; i++) {
            if((keys1[i]!==keys2[i])||(JSON.stringify(vals1[i])!==JSON.stringify(vals2[i]))) {
                output = false;
            }
        }
    }

    /*
    console.log(Object.keys(obj1));
    console.log(Object.keys(obj2));
    console.log(Object.values(obj1));
    console.log(Object.values(obj2));
    */

    return output;
}

/*
Write a method flatten() can take an
array of arrays and return a single
array that has all the elements of the
original arrays. You should utilize the
reduce() method and the concat() method.
 */
function flatten(arr) { //Recursive Method
    let output="";
    for(let i=0; i<arr.length; i++) { //for each element in the outer array
        if(arr[i].isArray){ //test if element is an array
           flatten(arr[i]);
        }
        else { //If this element isn't an array, add to output.
            output+= ((i===0) ?"" : ",")+arr[i];
        }
    }
    return output;
}

/*
01234567890123456789012345678901234567890123456789012345678901234567890123456789
//------------------------------------------------------------------------------
#-------------------------------------------------------------------------------
80 Characters
 */

//Call and test functions ---------------------------------------------------------------

//assignment examples
let obj = {here: {is: "an"}, object: 2};

console.log(objEquals(obj, obj));
// → true

console.log(objEquals(obj, {here: 1, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));
// → false

console.log(objEquals(obj, {here: {is: "another"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false


//create and array of arrays
let arr = [[4,8,6], [2,7], [10,3,5,1]];
let arr2 = [["elephant","zebra","giraffe"], ["cat","dog"], ["dolphin","shark","whale","fish"]];

console.log(flatten(arr));
console.log(flatten(arr2));