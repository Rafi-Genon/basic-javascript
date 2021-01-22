// https://github.com/Rafi-Genon/basic-javascript


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}


function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
    var costOfWatch = quantityOfWatch * 50;
    if (quantityOfMobile < 0) {
        return "Your input number is negative please try again"
    }
    else {
        var costOfMobile = quantityOfMobile * 100;
    }
    if (quantityOfLaptop < 0) {
        return "Your input number is negative please try again"
    }
    else {
        var costOfLaptop = quantityOfLaptop * 500;
    }
    var totalCost = costOfWatch + costOfMobile + costOfLaptop;
    return totalCost;
}


function hotelCost(livingDays) {
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
    else {
        var day0to10Bill = 10 * 100;
        var day11To20Bill = 10 * 80;
        var after20DaysBill = (livingDays - 20) * 50;
        taka = day0to10Bill + day11To20Bill + after20DaysBill;
        return taka;

    }
}

function megaFriend(friendsName) {
    var nameSize = 0;
    var largestName = "";
    if(friendsName.length == 0){
        return "Your array is empty, please input names"
    }
    for (var i = 0; i < friendsName.length; i++) {
        var letters = /^[A-Za-z]+$/;
        if (friendsName[i].match(letters)) {
            if (friendsName[i].length > nameSize) {
                var nameSize = friendsName[i].length;
                largestName = friendsName[i];
            }
        }
        else {
            return "Human's name cann't contain number"
        }
    }
    return largestName
}
// var result = megaFriend(["rafi", "rakib", "rakibodfdfdsf", "rakin", "mafi"])
// console.log(result)

var result = kilometerToMeter(5)
console.log(result)

