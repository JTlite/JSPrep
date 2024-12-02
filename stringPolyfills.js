//String - find Vowels

if(!String.prototype.myFindVowels){
    String.prototype.myFindVowels=function(){
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
  
  const example="jahnavi";
  const volwes = example.myFindVowels();
  console.log(volwes);


  //String - repeat
  if(!String.prototype.myRepeat){
    String.prototype.myRepeat=function(count){
   
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


//JSON.stringify

if (!JSON.stringify) {
    JSON.stringify = function(value) {
        if (value === null) return 'null';
        if (typeof value === 'string') return `"${value}"`;
        if (typeof value === 'number') return  String(value);
        if (typeof value === 'boolean') return String(value);
        
        if (Array.isArray(value)) {
            let result = '[';
            for (let i = 0; i < value.length; i++) {
                result += i > 0 ? ',' : '';
                result += value[i] === undefined || typeof value[i] === 'function' ? 'null' : JSON.stringify(value[i]);
            }
            return result + ']';
        }
        
        if (typeof value === 'object') {
            let result = '{';
            let first = true;
   
            for (const [key, val] of Object.entries(value)) {
                    const val = value[key];
                    if (val !== undefined && typeof val !== 'function') {
                        result += first ? '' : ',';
                        result += `"${key}":${JSON.stringify(val)}`;
                        first = false;
                    }
                }
            
            return result + '}';
        }
        
        return undefined; 
    };
}
