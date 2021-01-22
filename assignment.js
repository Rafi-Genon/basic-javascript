// https://github.com/Rafi-Genon/basic-javascript

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