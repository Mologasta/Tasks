var dig = 43;

st = dig.toString();

if (st.charAt(0) == st.charAt(1)) {
	console.log("equal") } else if (st.charAt(0) > st.charAt(1)) {
	 console.log ("first greater");
	} else {
		console.log ("second greater");
	}

res = prompt ('enter day');

switch (res) {
	case '1': console.log ('monday');
	break;
	case '2': console.log ('tuesday');
	break;
	case '3': console.log ('wednesday');
	break;
	case '4': console.log ('thursday');
	break;
	case '5': console.log ('friday');
	break;
	case '6': console.log ('saturday');
	break;
	case '7': console.log ('sunday');
	break;
}

var  string = prompt ('enter text');
var  sym = prompt ('enter symbol');
var arr = [];

var arr = string.split();
for (var i = 0; i < arr.length; i++) {
	if (arr[i].toString() === sym) {
	arr.splice(i,1);
	i--;
	}
}
var res = arr.join();
console.log(res);
