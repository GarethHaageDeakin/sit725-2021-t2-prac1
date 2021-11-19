function changeText(){
    var textArray = ["Hello World!", "42 it's a little over used", "This is not Minecraft", "Nice weather we are having... I think", "This is the knees of the bees"]
    var number = getRandomNumberBetween(0,textArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textArray[number];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}