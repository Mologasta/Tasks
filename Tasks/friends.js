function friendsCount (N, S) {
    // checking if we have number as arguments
    if (typeof (N) !== 'number') {
        throw  ("N is not a number");
    } else if (typeof (S) !== 'number') {
        throw  ("S is not a number");
    }
    // creating matrix NxN
    var matrix = [];
    for (var m = 0; m < N; m++){
        matrix[m] = [];
        for (var n = 0; n < N; n++) {
            matrix[m][n] = Math.round(Math.random());
        }
    }
    console.log(matrix);
    var target = S - 1;
    var friendList = [];
    // looking for friends
    for (var i = 0; i < matrix[target].length; i++) {
        console.log(i);
        if (matrix[target][i] == 1) {
            if (!isAdded()){
                friendList.push(i);
                target = i; // check if friend have friends on their own
                console.log(target);
            }
        }
        //checking if friend already on the list
        function isAdded() {
            friendList.forEach(function(item) {
                if (item == i) {
                    console.log("here");
                    return true;
                }
            });
            return false;
        }
    }
    // remove pearson index if it get into the list
    friendList.forEach(function(item, i) {
        if (item == S - 1) {
            friendList.splice(i, 1);
        }
    });
    // message about friends quantity
    return ("Pearson " + S + " have " + friendList.length + " friends.");
}