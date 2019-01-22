# Comparing two objects

This is a challenge I found from w3resource. This is challenge number 1.

Prompt: Write a JavaScript program to compare two objects to determine if the first  one contains equivalent property values to the second one.

## Solution

I did the challenge 3 different ways. Here we can see how to utilize array methods every() and some().

For the first way I gab the key values by using .getOwnPropertyNames() which returns an array of key values.
I then check lengths and if the lengths are then same I iterate thru the array to ensure the property values are the same.

```javascript
function isEqual(objA, objB){
  var aProps = Object.getOwnPropertyNames(objA);
  var bProps = Object.getOwnPropertyNames(objB);
  // If count of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
      return false;
  }
  //Looping through array using classing for loop
  for (var i = 0; i < aProps.length; i++) {

       var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
       if (objA[propName] != objB[propName]) {
           return false;
       }
  }
  return true;

}
```

For the second attempt I utilize the .every() function. .every() checks every value in the array and will
return true or false if all values meet the given condition.

```javascript
function isEqualUsingEvery(objA, objB){
  var a = Object.keys(objA);
  var b = Object.keys(objB);

  if(a.length != b.length){
    return false;
  }
  //Looping through array using every function
  return a.every(function(item){
      return objA[item]==objB[item]})
}
```

For the third attempt I utilize the .some() function. .some() will keep iterating through the array until it meets the first values that satisfies the condition.

```javascript
function isEqualUsingSome(objA, objB){
  var a = Object.keys(objA);
  var b = Object.keys(objB);
  var found = false;

  //looping though array using forEach method
  return (a.some(function(item){
    return(objA[item] != objB[item])}
  ) == false)
}
```

var obj1 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};
var obj2 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};

console.log(isEqual(obj1, obj2));
console.log(isEqualUsingSome(obj1, obj3))
console.log(isEqualUsingSome(obj1, obj2))
console.log(isEqualUsingEvery(obj1, obj3));
console.log(isEqualUsingEvery(obj1, obj2));
```

## Resources

- https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php
-
