function isEqual(objA, objB){
  var aProps = Object.getOwnPropertyNames(objA);
  var bProps = Object.getOwnPropertyNames(objB);
  // If count of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    control.log("I made it here")
      return false;
  }
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
  return a.every(function(item){
      return objA[item]==objB[item]})
}

function isEqualUsingSome(objA, objB){
  var a = Object.keys(objA);
  var b = Object.keys(objB);
  var found = false;

  //looping though array using forEach method
  return (a.some(function(item){
    return(objA[item] != objB[item])}
  ) == false)
}



var obj1 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};
var obj2 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};

var obj3 = {
    name: "Sankal",
    job: "JavaScript Developer"
};

console.log(isEqual(obj1, obj2));
console.log(isEqualUsingSome(obj1, obj3))
console.log(isEqualUsingSome(obj1, obj2))
console.log(isEqualUsingEvery(obj1, obj3));
console.log(isEqualUsingEvery(obj1, obj2));
