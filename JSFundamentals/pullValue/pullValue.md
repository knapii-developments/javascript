### Pulling Values from Array

This is a challenge I found from w3resource. This is challenge number 8. Feel fee to check out the source code here!

Challenge: Write a JavaScript program to filter out the specified values from an specified array. Return the original array without the filtered values.

## Solution

Here I use .filter() function to pull the values that I need. Short and sweet!

```javascript
function pull (arr, value){

  //checks to see value is in array
  if(!arr.includes(value)){
      return "value not in array";
  }
  //return desired values
  return arr.filter( val => val === value);

}
```


## Resources

- https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-8.php
