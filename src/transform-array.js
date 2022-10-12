const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */



 function transform( arr ) {
  const conditions= ['--discard-next','--discard-prev','--double-next','--double-prev']
  let newArr=[]
  if(Array.isArray(arr)){
for(let i=0;i<arr.length;i++)
if(conditions.includes(arr[i])){
if(arr[i]==conditions[0]){  // --discard-next
  if(arr[i+1] && arr[i+2]){
      i=i+2
  }else {
      return newArr
  }
 
}
if(arr[i]==conditions[1]){ //--discard-prev
  arr[i-1] && arr[i-2]!=conditions[0]&&newArr.pop()
}
if(arr[i]==conditions[2]){   //--double-next
arr[i+1] && newArr.push(arr[i+1])
}
if(arr[i]==conditions[3]){ // --double-prev
  arr[i-1]&& arr[i-2]!=conditions[0] && newArr.push(arr[i-1])
}
}else{
  newArr.push(arr[i])
}

return newArr
}else{
  throw new Error("'arr' parameter must be an instance of the Array!")
}
}


module.exports = {
  transform
};
