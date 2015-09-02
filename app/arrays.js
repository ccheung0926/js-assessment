exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var val = 0;
    for(var i = 0; i < arr.length; i++){
      val += arr[i];
    }
    return val;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i,1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) { 
    var a = arr.slice();
    for(var i = 0; i < a.length; i++){
      if(a[i] === item){
        a.splice(i,1);
      }
    }
    return a;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr; 
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        counter++;
      }
    }
    return counter;
  },

  duplicates : function(arr) {
    var obj = {};
    var a = [];
    for(var i = 0; i < arr.length; i++){
      if(obj.hasOwnProperty(arr[i])){
        obj[arr[i]] = true;
      }
      else{
        obj[arr[i]] = false;
      }
    }
    for(var key in obj){
      if(obj[key]){
        a.push(parseInt(key));
      }
    }
    return a;
  },

  square : function(arr) {
    for(var i = arr.length-1; i >= 0; i--){
      arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var array = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        array.push(i);
      }
    }
    return array;
  }
};
