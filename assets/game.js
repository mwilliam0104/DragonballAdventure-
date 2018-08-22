var radomResult;
var lose = 0;
var win = 0;
var previous = 0;

var images = [
    "https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png",
    "https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png",
    "https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png",
    "https://i.pinimg.com/originals/6c/72/47/6c7247dfb67e18add93d682dc9fdabcc.png",
]

var startGame = function () {

    $(".dragonballs").empty();



    radomResult = Math.floor(Math.random() * 69) + 30;

    $("#computerNum").html("Number of Dragonballs you must collect: " + radomResult)


    for (let i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;

        var dragonball = $("<div>");
        dragonball.attr({ "class": 'dragonball', "random-num": random });

        dragonball.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"

        })

        $(".dragonballs").append(dragonball);


    }

    $("#previous").html("Dragonballs you have collected:" + previous);

    $("#win").html("Wins: " + win);

    $("#lose").html("Losses: " + lose);


}

startGame();

$(document).on('click', ".dragonball", function () {

    var num = parseInt($(this).attr('random-num'));

    previous += num;

    $("#previous").html("Dragonballs you have collected:" + previous);

    if (previous > radomResult) {
        lose++;
        alert("Oh, No! You lost all your Dragonballs!!");


        //$("#lose").html("Losses: " + lose);

        previous = 0;

        startGame();

    }
    else if (previous === radomResult) {
        win++;
        alert("Congrats! You have summond the Dragon! Make Your Wish!!");

        //$("#win").html("Wins: " + win);

        previous = 0;

        startGame();

    }

});