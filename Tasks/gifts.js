function numberOfGifts (x, y, z, w) {
    var arr = [];
    if (typeof (w) !== 'number') {
        throw  ("there is some mistake try again");
    }
    // loop to push arguments into the array
    for (var i = 0; i < arguments.length - 1; i++) {
        if (typeof (arguments[i]) !== 'number') {
            throw  ("there is some mistake try again");
        }
        arr.push(arguments[i]);
    }
    console.log(arr);
    // declaring variables
    var tmpArr = arr.slice(); //copying array
    console.log(arr);
    var resArr = [];
    var fs;
    var g = 0;
    while (tmpArr.length > 0) {
        fs = tmpArr.length; // remembering tmpArr length, to cut off later
        for (var j = 0; j < tmpArr.length; j++) {
            for (var a = 0; a < 3; a++) {
                var tmp = (tmpArr[j] + arr[a]);
                if (tmp == w) {
                    resArr[g] = [tmpArr[j], arr[a]]; // counting variants
                    resArr[g].sort();
                    g++;
                }
                if (tmp < w) {
                    tmpArr.push(tmp); //to add array if it smaller then w
                }
            }
        }
        tmpArr.splice(0,fs); // cutting off processed numbers
    }
    // removing same variants
    resArr.forEach(function(item, i, arr) {
       for (var f = 0; f < arr.length; f++) {
           if (i == f) continue; //skip step if elements have same index
           var flag = false;
           for (var d = 0; d < item.length; d++){
               if (item[d] != arr[f][d]) {
                  flag = true;
                  break;
               }
           }
           if (!flag) {
               arr.splice(f,1);
           }
       }
    });
    return (resArr.length);
}