Array.prototype.groupBy(prop)
{
  var value = this.reduce(function(accumulator, currentValue){
     var key = currentValue[prop];
     accumulator[key] = (accumulator[key] || []).concat(currentValue);
     return accumulator;
  },{});
  
  return value;

}
