// var now = new Date();
// console.log (now.getDate(), now.getMonth() + 1, now.getFullYear());

--------------------------------
// var enYear = prompt ('enter year yyyy');
// var enMonth = prompt ('enter month mm');
// var enDay = prompt ('enter day dd');
// var enHours = prompt ('enter hours hh');

// var date = new Date();
 
// if (enYear > date.getFullYear()) {
// 	var res = enYear - date.getFullYear();
// 	console.log ('entered year is greater for ' + res + ' years') 
// } else {
// 	res = date.getFullYear() - enYear;
// 	console.log ('entered year is lesser for ' + res + ' years') 
// }

// if (enMonth > date.getMonth()) {
// 	res = enMonth - (date.getMonth() + 1);
// 	console.log ('entered month is greater for ' + res + ' months') 
// } else {
// 	res = date.getMonth() - enMonth;
// 	console.log ('entered month is lesser for ' + res + ' months') 
// }

// if (enDay > date.getDay()) {
// 	res = enDay - date.getDay();
// 	console.log ('entered day is greater for ' + res + ' days') 
// } else {
// 	res = date.getDay() - enDay;
// 	console.log ('entered day is lesser for ' + res + ' days') 
// }

// if (enHours > date.getHours()) {
// 	res = enHours - date.getHours();
// 	console.log ('entered hour is greater for ' + res + ' hours') 
// } else {
// 	res = date.getHours() - enHours;
// 	console.log ('entered hour is lesser for ' + res + ' hours') 
// }
----------------------------------

// var sum = { a: 2, b: 3, result:''};
// var mul = { a: 3, b: 3, result:''};

// Object.defineProperty(sum, 'result', {
// 	get: function () {return a + b;},
// 	set: function (value) {
// 	 this.a = (Math.random() * value) + 1;
// 	 this.a.Math.floor(); 
// 	 this.b = (Math.random() * value) + 1;
// 	 this.b.Math.floor(); 
// 	}

// })

Object.defineProperty(mul, 'result', {
	get: function () {return a * b;},
	set: function (value) {
	 this.a = (Math.random() * value) + 1;
	 this.a.Math.floor(); 
	 this.b = (Math.random() * value) + 1;
	 this.b.Math.floor(); 
	}
})

var str = prompt ('Ввести значения через запятую');
arr = str.split(',');
for (var i = 0; i < arr.length; i += 3) {
	arr[i] = 0;
}
console.log(arr);

var arr = [0, 1, 3, 4, 6, 7, 2, 3, 1, 6, 4];
for (var  i = 0; i < arr.length; i++){
	var cnt = 0;
	var shit = arr.indexOf(i);
	while (shit != -1) {
	  cnt++; 
	  shit = arr.indexOf(i, shit + 1);
	}
console.log('number of symbols in array ' + cnt);
}

var arr = [0, 1, 3, 4, 6, 7, 1, 2, 3, 6, 4];
var resArr = [];
var str = '';
resArr = arr.map (function (el, index , arr){
	if (arr[index - 1] == (arr[index] - 1) || (arr[index] + 1) == arr[index + 1]){
		str += ',' + index;
		return el;
	}
}
for (var i = 0; 0 < resArr.length; i++){
	if ((arr[i] + 1) != arr[i]) {
		resArr.push(resArr.sli)
	}
});
arr.forEach(function(el, i, arr){
	if (arr[i - 1] == (arr[i] - 1) || (arr[i] + 1) == arr[i + 1]){
		resArr.push(arr[i]);
		str += ',' + i;
	}
});
console.log(resArr);
console.log(str);

function Stack (maxSize) {
	this._stack = [];
	this.maxSize = maxSize;
}
Stack.prototype = {
	constructor: Stack,
	addElem: function (elem) {
		if (this._stack.length == this.maxSize) {
			throw new Error ('Стек переполнен');
		}
		this._stack.push(elem);
		return this;
	},
	rmElem: function() {
		if (this._stack.length == 0){throw new Error ('стек пустой')}
		this._stack.pop();
	},
	showElem: function() {
		alert (this._stack[this._stack.length - 1]);
	},
	stackLen: function() {
		alert (this._stack.length);
	},
	clearSteck: function() {
		this._stack.length = 0;
	},
	isFull: function() {
		if (this._stack.length == this.maxSize) {
			alert ('Стек переполнен');
		}
	},
	showSteck: function() {
		alert (this._stack);
	}
}