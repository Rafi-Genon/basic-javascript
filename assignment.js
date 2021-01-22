// https://github.com/Rafi-Genon/basic-javascript

/** Problem 1: kilometer function started from below */

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {
        var meter = kilometer * 1000; /** we know that, 1km = 1000m */
    }
    else {
        return "Distance cann't be negative."
    }
    return meter;
}

/** Problem 2: Budget calculator function started from below */

function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
    /** full meaning of quantityOfWatch = Quantity of watch,quantityOfMobile = Quantity of mobile, quantityOfLaptop = Quantity of laptop */

    if (quantityOfWatch >= 0 && quantityOfMobile >= 0 && quantityOfLaptop >= 0) {
        var costOfWatch = quantityOfWatch * 50;                         /** each watch is $50 */
        var costOfMobile = quantityOfMobile * 100;                      /** each mobile is $100 */
        var costOfLaptop = quantityOfLaptop * 500;                      /** each laptop is $500 */
        var totalCost = costOfWatch + costOfMobile + costOfLaptop;
    }
    else {
        return "Your quantity number cann't be negative."
    }
    return totalCost;
}


/** Problem 3: Hotel cost function started from below */

function hotelCost(livingDays) {                                    /** livingDays means how many days you had passed in hotel */
    var taka = 0;
    if (livingDays >= 0) {
        if (livingDays <= 10) {
            taka = livingDays * 100;
            return taka;
        }
        else if (livingDays <= 20) {
            var day1To10Bill = 10 * 100;                            /** day1To10Bill means Bill of 1st day to 10th day */
            var after10DaysBill = 80 * (livingDays - 10);           /** 11th day to 20th day each day cost $80 */
            taka = day1To10Bill + after10DaysBill;
            return taka;
        }
        else {
            var day1To10Bill = 10 * 100;                            /** day11To20Bill means Bill of 11th day to 20th day */
            var day11To20Bill = 10 * 80;
            var after20DaysBill = (livingDays - 20) * 50;           /** 21th day to your death day each day cost $50 */
            taka = day1To10Bill + day11To20Bill + after20DaysBill;
            return taka;

        }
    }
    else {
        return "Your living days cann't be negative."
    }
}


/** Problem 4: Mega friend function started from below */

function megaFriend(friendsName) {
    var nameSize = 0;                                   /** nameSize means the number of letters in a name */
    var largestName = "";                               /** largestName contain the first biggest name according to the number of letters in that name */
    if (friendsName.length == 0) {
        return "Your array is empty, please input names."
    }
    else {
        for (var i = 0; i < friendsName.length; i++) {
            var letters = /^[A-Za-z -]+$/;                  /** Human's name cann't contain number, but name can contain Hyphen(-) example: Al-Amin */
            if (friendsName[i].match(letters)) {
                if (friendsName[i].length > nameSize) {
                    nameSize = friendsName[i].length;
                    largestName = friendsName[i];
                }
            }
            else {
                return "Human's name cann't contain number."
            }
        }
    }
    return largestName
}