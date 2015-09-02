exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var arr = [];
  	for(var i = start; i < end; i++){
  		arr.push(i);
  	}
  	console.log(arr);
  	return arr;
  }
};
