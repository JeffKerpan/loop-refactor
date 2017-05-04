'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function(prev, curr) {
      return prev += curr;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(curr) {
      return curr.hasOwnProperty(prop);
    });
  },

  convertNameArrayToObject: (arr) => {
  var nameObj = arr.map(function (x) {
    var obj = {};
      obj.first = x[0];
      obj.last = x[1];
      return obj;
    });
    return nameObj;
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function (element, index, array) {
      return element.hasOwnProperty(prop);
    });
  },

  stringMatch: (arr, str) => {
    var matches = arr.filter(function (word) {
      if (word.includes(str)) {
        return word;
      }
    });
    return matches;
  },
};



// module.exports = {

  // sum: (arr, base) => {
  //   let sum = base;
  //   for (var i = 0; i < arr.length; i++){
  //     sum += arr[i];
  //   }
  //   return sum;
  // },
  // sum: function(arr, base) {
    // let sum = base;
    //   for (var i = 0; i < arr.length; i++){
    //     sum += arr[i];
    //   }
    //   return sum;
  // },

  //This way also works in ES6
  // sum(arr, base) {
  //   let sum = base;
  //     for (var i = 0; i < arr.length; i++){
  //       sum += arr[i];
  //     }
  //     return sum;
  // },

  // someObjsContainProp: (arr, prop) => {
  //   return arr.some(function(curr) {
  //     return curr.hasOwnProperty(prop);
  //   });
  // }



  // convertNameArrayToObject: (arr) => {
    // let nameObj = [];
    // for(var i = 0; i < arr.length; i++){
    //   let obj = {};
    //   obj.first = arr[i][0];
    //   obj.last = arr[i][1];
    //   nameObj.push(obj);
    // }
    // return nameObj;
  // },

  // objContainsProp: (arr, prop) => {
    // for (var i = 0; i < arr.length; i++){
    //   if(!arr[i].hasOwnProperty(prop)){
    //     return false;
    //   }
    // }
    // return true;
  // },

  // stringMatch: (arr, str) => {
  //   let matches = [];
  //   for(var i = 0; i < arr.length; i++){
  //     if (arr[i].includes(str)){
  //       matches.push(arr[i]);
  //     }
  //   }
  //   return matches;
  // },
// };
