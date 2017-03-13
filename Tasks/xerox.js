function docs (N, x, y) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) !== 'number') {
            throw  ("there is some mistake try again");
        }
    }
    // declaring variables
    var res = 0;
    var cntXrx1 = 0;
    var cntXrx2 = 0;
    var f1 = true;
    var f2 = true;
    var j = 0;
    for (j; N > 0; i++) { // loop that will go on until we have all copies we need
        if (j == cntXrx1) {
            f1 = true;
        }
        if (j == cntXrx2) {
            f2 =  true;
        }
        // checking if we have spare copy to use 2 xerox in one time
        if (res > 0){
            if (f1 || f2) {
                xerox1();
                xerox2();
            }
            if (f1) xerox1();
            if (f2) xerox2();
        } else {
            // checking what xerox are faster
            if (x <= y) {
                xerox1();
            } else if (x > y) {
                xerox2();
            }
        }
    }
    // declaring xerox functions
    function xerox1(){
        if (N == 0) return;
        f1 = false;
        N--;
        cntXrx1 += x;
        }
    function xerox2(){
        if (N == 0) return;
        f2 = false;
        N--;
        cntXrx2 += y;
    }
    // res = xerox that finished last
    res = Math.max(cntXrx1, cntXrx2);
    return res;

}

