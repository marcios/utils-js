const Emitter = {
  events:{},
  on:function(event,callback){
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },
  emit:function (event, ...rest){
    if(!Emitter.events[event]){
      return;
    }
    
    Emitter.events[event].forEach(function(evt){
      evt(...rest);
    });
  }
}
