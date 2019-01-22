function csvToArray (str){
  console.log(...str);
  var array = str.split('\n');
  console.log(array);
  var twoDArray = [];

  return array.map(item=> item.split(','));


}


var str1 =  'a,b\nc,d\ne,f'
var str2 = 'a,b\nc,d,e,\nf'
console.log(csvToArray(str1));
console.log(csvToArray(str2));
