// https://github.com/Rafi-Genon/basic-javascript


function hotelCost(livingDays){
    var taka = 0;
    if (livingDays <= 10) {
        taka = livingDays * 100;
        return taka;
    }
    else if (livingDays <= 20) {
        var day0to10Bill = 10 * 100;
        var after10DaysBill = 80 * (livingDays - 10);
        taka = day0to10Bill + after10DaysBill;
        return taka;
    }
    else{
        var day0to10Bill = 10 * 100;
        var day11To20Bill = 10 * 80;
        var after20DaysBill = (livingDays - 20) * 50;
        taka = day0to10Bill + day11To20Bill + after20DaysBill;
        return taka;
    
    }
}



function megaFriend(friendsName) {
    var nameSize = 0;
    var largestName = "";;

    for (var i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > nameSize) {
            var nameSize = friendsName[i].length;
            largestName = friendsName[i];
        }
    }
    return largestName;
}