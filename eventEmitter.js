class Emitter{
    constructor(){
      this.events =[];
    }
    
    subscribe(event,callback){
      if(!events[event]){
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
    
    emit(event,...args){
      if(!this.events[event]) return
      this.events[event].forEach((l)=> l(...args));
    }
    
    unsubscribe(event,callback){
      if(!this.events[event]){
        console.log('event foes not exist');
      }else{
        this.events.event = this.events[event].filter((l)=> l!=callback);
      }
    }
    
  }
  
  
  const em = new Emitter();
  em.subscribe('onClick', ()=>console.log('callback-${count} for onClick event'));
  em.emit('onClick', 1);
  em.unsubscribe('onClick');
  em.emit('onClick',2);