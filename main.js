var productArr = [];

var ballPit = {
 name: "Ball Pit Desk",
 description: "When you need a break, fall off your chair for some fun!",
 price: "$799.99", 
 image: "images/ball-pit-desk.jpg",
 button: "Add to Cart"
}

productArr.push(ballPit);

var carDesk = {
 name: "Car Desk",
 description: "This is for the car lovers out there.",
 price: "$2,399.99", 
 image:"images/car-desk.jpg",
 button: "Add to Cart"
}

productArr.push(carDesk);

var childDesk = {
 name: "Child Desk" ,
 description: "Keep small children entertained.",
 price: "$32.99", 
 image: "images/child-desk.jpg",
 button: "Add to Cart"
}

productArr.push(childDesk);

var gardenDesk = {
 name: "Garden Desk",
 description: "Now you don't have to go outside for Zen.",
 price: "$231.99", 
 image: "images/garden-desk.jpg",
 button: "Add to Cart"
}

productArr.push(gardenDesk);

var lieDownDesk = {
 name: "Lie Down Desk",
 description: "Don't like being normal? This will help.",
 price: "$4,595.99", 
 image: "images/lie-down-desk.jpg",
 button: "Add to Cart"
}

productArr.push(lieDownDesk);

var outsideDesk = {
 name: "Outside Desk",
 description:"This is our MVP desk for outdoorsy people." ,
 price:"$11.99" , 
 image:"images/outside-desk.jpg",
 button: "Add to Cart"
}

productArr.push(outsideDesk);

var tieFighterDesk = {
 name: "Tie Fighter Desk",
 description:"It's Star Wars related so you have to buy it." ,
 price:"$8,399.99" , 
 image:"images/tie-figher-desk.jpg",
 button: "Add to Cart"
}

productArr.push(tieFighterDesk);

var toiletDesk = {
 name: "Toilet Desk",
 description: "Never leave your desk for maximum efficiency.",
 price: "$210.99", 
 image:"images/toilet-desk.jpg",
 button: "Add to Cart"
}

productArr.push(toiletDesk);

var  treadmillDesk= {
 name: "Treadmill Desk",
 description: "Don't die young. Walk and type!",
 price: "$1,119.99", 
 image: "images/treadmill-desk.jpg",
 button: "Add to Cart"
}

productArr.push(treadmillDesk);



var productElements = document.getElementsByClassName("prodcard");

console.log(productElements);

for (var i = 0; i < productArr.length; i++) {
	productElements[i].innerHTML = "<img src='" + productArr[i].image + "'</img>";
	productElements[i].innerHTML += "<h2>" + productArr[i].name + "</h2>";
	productElements[i].innerHTML += "<p>" + productArr[i].description + "</p>";
	productElements[i].innerHTML += "<p>" + productArr[i].price + "</p>";
}

