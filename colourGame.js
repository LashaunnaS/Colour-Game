var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colours[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    // generate all new colours
    colours = generateRandomColours(numSquares);
    //pick a new random colour from array
    pickedColour = pickColour();
    //change colours of squares
    colourDisplay.textContent = pickedColour;
    this.textContent = "New Colours";

    msgDisplay.textContent = "";
    //change colours to squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colours[i];
    }
    h1.style.background = "steelblue";
})

colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++) {
    //add initial colours to squares
    squares[i].style.background = colours[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab colour of clicked square
        var clickedColour = this.style.background;
        //compare colour to pickedColour
        if (clickedColour === pickedColour){
            msgDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColours(clickedColour);
            h1.style.background = clickedColour;
        } else {
            this.style.background = "#232323";
            msgDisplay.textContent = "Try Again!";
        }

    });
}

function changeColours(colour ) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
    //change each colour to match given colour
    squares[i].style.background = colour;

    }
}

function pickColour() {
   var random = Math.floor(Math.random() * colours.length);
   return colours[random];
}

function generateRandomColours(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++)   {
        //get random colour and push into arr
        arr.push(randomColour())
    }
    //return that array
    return arr;
}

function randomColour() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256 + 1);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256 + 1);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256 + 1);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}