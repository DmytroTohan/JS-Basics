// Task 1 - console
document.getElementById('task1').onclick = function() {
    console.clear();
    var personName = "Dima";
    var eventPlace = "in Lviv";
    var eventDate = getEventDate();
    var event = prompt("Enter event:", "Example: go shopping");
    console.log(personName + " " + event + " " + eventDate + " " + eventPlace);
};

function getEventDate() {
    var now = new Date();
    var date = "today at " + now.getHours() + ":" + now.getMinutes();
    return date;
}

// Task 2 - points
document.getElementById('task2').onclick = function() {
    console.clear();
    var x1 = 3;
    var y1 = 5;
    var x2 = prompt("Enter X-coordinate of the second point:");
    var y2 = prompt("Enter Y-coordinate of the second point:");
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    alert("The distance between points A(" + x1 + "," + y1 + ") and B(" + x2 + "," + y2 + ") is " + distance);
};

// Task 3 - for
document.getElementById('task3').onclick = function() {
    console.clear();
    var str = "";
    for (var i = 0; i < 10; i++) {
        str += "#";
        console.log(str);
    }
};

// Task 4 - while
document.getElementById('task4').onclick = function() {
    console.clear();
    var str = "# # # # #";
    var i = 7;
    while (i > 0) {
        if (i % 2 === 0) {
            console.log(' ' + str);
        } else {
            console.log(str);
        }
        i--;
    }
};

// Task 5 - true
document.getElementById('task5').onclick = function() {
    console.clear();
    console.log("Task 5. Please, use functions from hwk list");
};

function a() {
    return 5;
}

function b(arg1, arg2) {
    return arg1 + arg2;
}

function c(arg1, arg2) {
    return Math.pow(arg1, arg2);
}

function d(num) {
    var object = {
        a: num
    };
    return object;
}

function e(arg) {
    return function() {
        return arg;
    };
}

function f(arg1, arg2) {
    var arr = [];
    for (var i = 0; i < arg2; i++) {
        arr.push(arg1);
    }
    return arr;
}

function g(arg) {
    if (typeof arg !== 'undefined') {
        return arg;
    } else {
        return 99;
    }
}

function h() {
    return (function() {
        return 5;
    })();
}

function j(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function k(object) {
    var sum = 0;
    for (var key in object) {
        sum = sum + object[key];
    }
    return sum;
}

function m(arr1, arr2) {
    var resultArr = [];
    for (var i = 0; i < arr1.length; i++) {
        resultArr[i] = arr1[i] + arr2[i];
    }
    return resultArr;
}

function n(arg1) {
    return function(arg2) {
        return function(arg3) {
            return arg1 + arg2 + arg3;
        };
    };
}

// Task 6
document.getElementById('task6').onclick = function() {
    console.clear();
    var userAnswer = getUserAnswer();
    alert(userAnswer);
};

function getUserAnswer() {
    var randomNum = getIntRandomNumber(0, 100);
    var message = "";
    while (true) {
        userNumber = prompt("Enter number from 1 to 100: (enter 'I LOST' to exit):");
        if (userNumber == randomNum) {
            message = "Congratulations!!! You are WIN!!! The number is " + randomNum;
            break;
        } else if (userNumber > randomNum) {
            alert("Our number is lower, try again:");
        } else if (userNumber < randomNum) {
            alert("Our number is higher, try again:");
        } else if (userNumber == "I LOST") {
            message = "You are LOST!!!";
            break;
        }
    }
    return message;
}

// Task 7 - guess+
document.getElementById('task7').onclick = function() {
    console.clear();
    var userAnsver = confirm("Do you want to play the game?");
    if (!userAnsver) {
        console.log("Today you will not win the jackpot, but you could");
        return;
    }
    userWin = 0;
    playGame(1);
    userAnsver = getContinue();
    if (userAnsver) {
        playGame(3);
    }
};

function playGame(round) {
    randomNum = getIntRandomNumber(0, 5);
    var attempts = 3;
    var jackPot = 10;
    while (attempts > 0) {
        var userChoice = getUserChoice();
        if (userChoice == randomNum) {
            userWin += jackPot * round;
            break;
        }
        jackPot = Math.floor(jackPot / 2);
        attempts -= 1;
    }
    console.log("Your win - " + userWin + "$");
}

function getUserChoice() {
    var userNum = prompt("Enter the number from 0 to 5: ");
    return userNum;
}

function getContinue() {
    var cont = confirm('Do you want to play the game again?');
    return cont;
}

// function
function getIntRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
