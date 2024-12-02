//Flatten Object

function flattenObj(obj){
    const result={};
    for(let i in obj){
      if(typeof obj[i] !== 'object'){
        result[i] = obj[i];
      }else{
        const temp =flattenObj(obj[i]);
        for(let j in temp){
          result[i+"_"+j] = temp[j];
        }
      }
    }
    
    return result;
  }
  
  const obj = {
                name: "Jahnavi",
                place: {
                  pincode: "530106",
                  area: "bellandur"
                }
              };
  
  console.log(flattenObj(obj));
