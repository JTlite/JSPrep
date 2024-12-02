 //Array polyfills
  //forEach

  if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback, thisContext){
     
      const array = this;
      const length = array.length;
      for(let i=0;i<length;i++){
        callback(thisContext, array[i],i, array);
      }
    }
  }
  
  const arr2 =[1,2,3,4];
  arr2.myForEach((el)=>console.log(el*4));

//Map

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback, thisContext){
           
      const array = this;
      const length = array.length;
      const result=[];
      for(let i=0;i<length;i++){
        if(i in array){
          result[i] = callback(thisContext, array[i],i, array);
        }
        
      }
      
      return result;
    }
  }
  
  const arr3 =[1,2,3,4];
  const results = arr3.myMap((el)=>el*2);
  console.log(results);


//filter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback, thisContext){
           
      const array = this;
      const length = array.length;
      let result = [];
      for(let i=0;i<length;i++){
        if(i in array){
          if(callback(thisContext, array[i],i, array)){
            result.push(array[i]);
          }
        }
        
      }
      return result;
    }
  }
  
  const arr4 =[1,2,3,4];
  const res =arr4.myFilter((el)=> el>2);
  console.log(res);


//every
//forEach

if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(callback, thisContext){
           
      const array = this;
      const length = array.length;
  
      for(let i=0;i<length;i++){
        if(i in array){
          if(!callback(thisContext, array[i],i, array)){
           return  false;
          }
        }
        
      }
      return true;
    }
  }
  
  const arrr =[1,2,3,4];
  const answer =arrr.myEvery((el)=> el>2);
  console.log(answer);


  //reduce
  if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback, initialValue){
           
      let accumulator;
      let startIndex;
      if(length >0 && initialValue === undefined){
        accumulator = array[0];
        startIndex=1;
      }else{
        accumulator =initialValue;
        startIndex=0
      }
  
      for(let i=startIndex;i<length;i++){
        if(i in array){
          accumulator = callback(accumulator,array[i],i,array);
        }
        
      }
      return accumulator;
    }
  }
  
  const myArr =[1,2,3,4];
  const r =myArr.myReduce((acc,cur)=> acc+cur,0);
  
  console.log(r);

//-------------------------------
//Flatten array

function flattenArray(arr){
    const result = [];
    for(i in arr){
      if(!Array.isArray(arr[i])){
        result.push(arr[i])
      }else{
        result.push(...flattenArray(arr[i]));
      }
    }
    return result;
    
  }
  
  const arr = [1,[2,3,4],5]
  console.log(flattenArray(arr));