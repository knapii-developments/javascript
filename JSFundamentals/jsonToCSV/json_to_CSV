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
