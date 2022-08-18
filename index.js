 function saturdayFun(theActivity = "roller-skate") {
    return(`This Saturday, I want to ${theActivity}!`);
}

function mondayWork (place = "go to the office") {
    return(`This Monday, I will ${place}.`);
}

let wrapAdjective = function(highlight = "*") {

    return function(adjective = "special") {
        return `You are ${highlight}${adjective}${highlight}!`
    }

}