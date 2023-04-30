'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let characters = string.split('');
    let start = 0;
    let end = characters.length - 1;
    while (start < end) {
        [characters[start], characters[end]] = [characters[end], characters[start]];
        start++;
        end--;
      }
      return characters.join('');
    
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("^_^"||"^_-"||"")) {
          filteredArr.push(arr[i]);
        }
      }
      return filteredArr;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let evenString = "";
    for (let i = 0; i < str.length; i += 2) {
        if (i % 2 === 0) {
            evenString += str[i];
        }
      }
      return evenString;    
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
   let filteredIngredients = [];
    for (let i = 0; i < arr.length; i++) {
         let subArray = [];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].toLowerCase().includes("chicken")) {
              subArray.push(arr[i][j]);
            }
          }
          filteredIngredients.push(subArray);
        }
        return filteredIngredients;
        
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
