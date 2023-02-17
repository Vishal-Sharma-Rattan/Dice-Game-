

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 *6)+1;

var randomImage = "dice"+ randomNumber1+".png"; // creating random image between 1-6

var randomImageSource = "images/" + randomImage ;


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

// for second dice

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 *6)+1;

var randomImage2 = "dice"+ randomNumber2+".png"; // creating random image between 1-6

var randomImageSource2 = "images/" + randomImage2 ;


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

// seting the Heading to which one win

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
}
else if(randomNumber1 < randomNumber2){
    
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}
else{
    document.querySelector("h1").innerHTML = "Game Draw !"
}


// refresh Button
function refresh(){
    window.location.reload("Refresh")
  }