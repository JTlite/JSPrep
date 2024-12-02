//---------------------------
//polyfill for call,apply,bind

const obj1={
    name:"Jahnavi"
  }
  
  function Intro(area,city){
    console.log(`I am ${this.name} from ${area},${city}`);
  }
  
  function myCall(context, ...args){
    context.fn = this;
    context.fn(...args);
  }
  
  function myApply(context, args){
    context.fn =this;
    context.fn(...args);
  }
  
  function myBind(context, args){
    context.fn=this;
    return function(...nextArgs){
      context.fn(...args,...nextArgs);
    }
  }
  
  Intro.myCall(obj1,"bellandur","banglore")
  Intro.apply(obj1,["bellandur","banglore"])

 

  