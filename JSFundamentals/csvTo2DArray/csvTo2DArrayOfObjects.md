# Converting CSV to 2D Array of Objects

Challenge:
  Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects.
  The first row of the string is used as the title row.

## Solution:

1. I utilized the string functions .split() and .slice() to convert the CSV to and array properly. The slice() method returns the selected elements in an array, as a new array object. split() function splits the given string into array of strings by separating it into substrings specified by the separator. In this case the seapartor is a comma.
```javascript
let titleString = str.split('\n').shift() \\ col1,col2
let titlesArray = keyString.split(','); \\[ 'col1', 'col2' ]
let values = str.split('\n').slice(1) \\[ 'a,b', 'c,d' ]
```

2. I then iterate through the "values" array using the map function. I do more string manipulation and use the reduce function. The reduce function is useful for when you want to flatten an array. The callback function as 4 arguments. Here I'm using 3 out of the four. I'm using:
  + accumulator — Accumulates all of the callbacks returned values.
  + val — the current value being processed
  + index — the current index of the value being processed

I'm initializing the accumulator as an object and returning that object after I define key value pairs. When this completes I get an 2D array of objects.

```javascript
return values.map(item =>{
      //Split values by comma.Iterate through array
      //by using reduce function with initial function being object
        return item.split(",").reduce((accum, currentValue, index)=>{
            accum[titlesArray[index]]=currentValue
          return accum;
        }, {})
  })
```


### Resources

-https://www.w3resource.com/javascript-exercises/fundamental/index.php

-https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc
