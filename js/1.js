var string = 'derp';
var text = 'derpderpderpsdfsdfderp derp';
var cnt = 0;

for (var i = 0; i < text.length; i++) {
	if (text.indexOf(string, i) !== -1){
		i = text.indexOf(string, i);
		cnt++};
} 
console.log (cnt);

var min = 1;
var max = 7;
var cubeValue;
result  = 0;
cnt = 0;
while (result < 20) {
	cubeValue = Math.random() * (max - min) + min;
	cubeValue = Math.floor(cubeValue);
	console.log (cubeValue);
	result += cubeValue;
	cnt ++
}

console.log(result, cnt);
