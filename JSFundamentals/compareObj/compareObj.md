# Comparing two objects

This is a Challenge I found from w3resouruce. This is challenge number 1. 

I did the challenge 3 different ways. Here we can see how to utilize array methods every() and forEach(). 

Prompt: Write a JavaScript program to compare two objects to determine if the first  one contains equivalent property values to the second one.

```javascript
function isEqual(objA, objB){
  var aProps = Object.getOwnPropertyNames(objA);
  var bProps = Object.getOwnPropertyNames(objB);
  // If count of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    control.log("I made it here")
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

function isEqualUsingEvery(objA, objB){
  var a = Object.keys(objA);
  var b = Object.keys(objB);

  if(a.length != b.length){
    return false;
  }
  //Looping through array using every function
  return a.every(keyExsist)
  


}
function isEqualUsingForEach(objA, objB){
  var a = Object.keys(objA);
  var b = Object.keys(objB);
  var found = false;
  
  //looping though array using forEach method
  a.forEach(item =>{
    console.log(item);
    //inline if statement
    found = ((objA[item] = objB[item]) ? true : false);
  })

  return found;
}

//Function returns boolean value by determining if key values are the same
function keyExist(currentElement, index, array){
  return obj1[currentElement] == obj2[currentElement];
}

var obj1 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};
var obj2 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};

console.log(isEqual(obj1,obj2));
console.log(isEqualUsingEvery(obj1, obj2));
console.log(isEqualUsingForEach(obj1, obj2))
```

## Resources

- https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php
-
