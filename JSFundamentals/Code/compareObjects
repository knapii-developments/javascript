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

var obj1 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};
var obj2 = {
    name: "Sankalp",
    job: "JavaScript Developer"
};

console.log(isEqual(obj1,obj2));
