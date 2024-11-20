//forEach

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback, thisContext){
      if( !(this instanceof Array)){
        throw new TypeError("input provided is non-array");
   
      }
      
      if(typeof callback !== 'function'){
        throw new TypeError("callback is not a function")
      }
      
      const array = this;
      const length = array.length;
      for(let i=0;i<length;i++){
        callback.call(thisContext, array[i],i, array);
      }
    }
  }
  
  const arr =[1,2,3,4];
  arr.myForEach((el)=>console.log(el*4));

//Map

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback, thisContext){
      if( !(this instanceof Array)){
        throw new TypeError("input provided is non-array");
   
      }
      
      if(typeof callback !== 'function'){
        throw new TypeError("callback is not a function")
      }
      
      const array = this;
      const length = array.length;
      const result=[];
      for(let i=0;i<length;i++){
        if(i in array){
          result[i] = callback.call(thisContext, array[i],i, array);
        }
        
      }
      
      return result;
    }
  }
  
  const arr =[1,2,3,4];
  const result = arr.myMap((el)=>el*2);
  console.log(result);


//filter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback, thisContext){
      if( !(this instanceof Array)){
        throw new TypeError("input provided is non-array");
   
      }
      
      if(typeof callback !== 'function'){
        throw new TypeError("callback is not a function")
      }
      
      const array = this;
      const length = array.length;
      let result = [];
      for(let i=0;i<length;i++){
        if(i in array){
          if(callback.call(thisContext, array[i],i, array)){
            result.push(array[i]);
          }
        }
        
      }
      return result;
    }
  }
  
  const arr =[1,2,3,4];
  const result =arr.myFilter((el)=> el>2);
  console.log(result);


//every
//forEach

if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(callback, thisContext){
      if( !(this instanceof Array)){
        throw new TypeError("input provided is non-array");
   
      }
      
      if(typeof callback !== 'function'){
        throw new TypeError("callback is not a function")
      }
      
      const array = this;
      const length = array.length;
  
      for(let i=0;i<length;i++){
        if(i in array){
          if(!callback.call(thisContext, array[i],i, array)){
           return  false;
          }
        }
        
      }
      return true;
    }
  }
  
  const arr =[1,2,3,4];
  const result =arr.myEvery((el)=> el>2);
  console.log(result);


  //reduce
  if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback, initialValue){
      if( !(this instanceof Array)){
        throw new TypeError("input provided is non-array");
   
      }
      
      if(typeof callback !== 'function'){
        throw new TypeError("callback is not a function")
      }
      
      const array = this;
      const length = array.length;
      
      if(length == 0 && initialValue=== undefined){
        throw new RangeError("input provided as an empty array")
      }
      
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
  
  const arr =[1,2,3,4];
  const result =arr.myReduce((acc,cur)=> acc+cur,0);
  
  console.log(result);

  //String - find Vowels

  if(!String.prototype.myFindVowels){
    String.prototype.myFindVowels=function(){
     if(this == null || this === undefined){throw new TypeError("input is null")}
      let results = [];
      let vowels =['a','e','i','o','u'];
      for(let i=0;i<this.length;i++){
        const char = this[i].toLowerCase();
        if(vowels.includes(char)){
          results.push(char);
        }
      }
      
      return results;
      
    }
  }
  
  const str="jahnavi";
  const result = str.myFindVowels();
  console.log(result);


  //String - repeat
  if(!String.prototype.myRepeat){
    String.prototype.myRepeat=function(count){
     if(this == null || this === undefined){throw new TypeError("input is null")}
      if(count <= 0 || count ===undefined){ throw new TypeError("count must be non-negative ")}
      let results = '';
      
      for(let i=0;i<count;i++){
        results = results+this;
      }
      
      return results;
      
    }
  }
  
  const str="jahnavi";
  const result = str.myRepeat(3);
  console.log(result);