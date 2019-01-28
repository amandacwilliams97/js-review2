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
    var output="[";
    for(let i=0; i<arr.length; i++) {
        if(arr[i].isArray){
            for(let j=0; j<arr[i].length; j++) {
                output+= ((i==0&&j==0) ?"" : ", ")+arr[i][j];
            }
        }
        else {
            output+= arr[i];
        }

    }
    output+="]";

    console.log(output);

    //why would reduce help? It only works with a function.
    //Which I already wrote without it.
    //var output2 = arr.reduce(console.log(),arr);
    //console.log(output2);
}

//Call and test functions
//create objects
/*
var obj1 = "Separate Vixen.";
var obj2 = "Separate Vixen.";

let obj3 = "Onyx Stone";
let obj4 = "Stone Onyx";

objEquals(obj1, obj2);
objEquals(obj3, obj4);
*/

//create and array of arrays
let arr = [[4,8,6], [2,7], [10,3,5,1]];
let arr2 = [["elephant","zebra","giraffe"], ["cat","dog"], ["dolphin","shark","whale","fish"]];
flatten(arr);
flatten(arr2);