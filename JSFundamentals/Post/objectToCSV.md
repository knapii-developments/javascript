# Object to CSV

Challenge: Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified.

## Solution

1. I iteratate through the specified columns using the map function. I use the reduce function on the "json" array. I initalize the accumulator to an array. I then check to see if the key value exist it at the current position. If it does I add it to the accummulator then return it.

```javascript
function JSON_to_CSV (json, columns){

  let columnsArray = columns.map((item)=>{
    return json.reduce((accum, currentValue)=>{
      //check to see if index exist if so push the value
      (item in currentValue) && accum.push(currentValue[item]);
      return accum;
    }, [])
    })
    console.log(columnsArray);
    return columnsArray.join(',')
  
}
console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
```




### Resources
- https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-5.php
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
