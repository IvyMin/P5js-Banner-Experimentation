//function setup () {
//    
//    
//    
//}
//
//function draw() {
//    ellipse()
//}

//*array = container []
//array means you can store multiple information in it 
//all arrays have a method you can call called push, append, add, etc. arrays always have a way to add an item and in p5js it's push. 
var cages = [];
var pets = [];
var mouseX;
var bg;
var mouseY;
var quotes = [
  	'I have a twin sister and she works in Seattle.',
  	'I am a UX storyteller interested in the experiences of people.',
  	'My family was kicked out of America for being illegal residents after moving from South Korea. Canada was an afterthought but I personally love it here.',
  	'My mom named our first dog, Happi. I used to think the name was original until we went to a park and a dog from another Korean family ran to us.',
    'I want to decorate my basement with board games, video games, and D&D when I am older.',
    'I started a board game collection when I was 19. My mom threw it out 2 months ago (I had 9 games worth $300).',
    'Gifting my friends and family with paper crafts are really therapeutic to me.',
  	'I would like to travel to Japan with my friends one day and pretend I remember my 1 year of Japanese studies during school to be their tourguide.',
  	'I was born with both of my pinkies bent. The doctors hypothesized that my twin sister kicked me in the womb and nobody noticed until I grew out of my baby fingers.',
  	'I want to create interactive stories to bring attention to socio-political issues.',
  	'I discovered my love for storytelling as a kid when my family would often move for their work. I grew to love my imaginary friends when I was alone.',
  	'I took a screenwriting class when I was 20 and I fell in love with it. I am currently working on a (thriller) script to submit it into a contest.',
  	'And I messed up my ankles as a kid when I fell into a ditch because I was too distracted by the red balloon I was following in the sky. I can no longer do squats because of it.',
  	'I dyed my hair pink as an impulsive decision with my friends last summer for the first time. I wore a hat the next day to hide from my mom who disapproved of it earlier.',
    'My nickname in Korea was breadgirl because I loved bread so much. It was a wordplay in the Korean language (빵수니).',
    'I auditioned for a PopTarts commercial when I was 9. I passed all the rounds but the cost to audition for the final round was too expensive.',
    'I was on live TV multiple times in Korea because my dad was friends with a renown musician. I was infamous for being the awkward shuffler who awarded flowers.',
    'My mom painted portraits of my sister and I but my friends have a hard time believing that my portrait is me.',
    'I was born with a high IQ but my EQAO score in grade 9 math cannot attest to that.',
    'Once, I refused to leave the bathroom because there was a locust chirping loudly on the sink counter and I was afraid it would attack me.',
    'My sister and I played sock wars. It consisted of rolling clean socks into small balls before throwing them at each other from our pillow castles.'
]

//code retrieved from https://editor.p5js.org/ylee1/sketches/SJ2o6-mo7

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  
}

function newQuote2() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay2').innerHTML = quotes[randomNumber];
  
}

function newQuote3() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay3').innerHTML = quotes[randomNumber];
  
}

//end of code from https://editor.p5js.org/ylee1/sketches/SJ2o6-mo7

//var myFont;
//function preload() {
////myFont = loadFont('assets/custom-font.ttf');
//}

function setup() {
createCanvas(windowWidth, windowHeight);
    //for the background, I want this 
    //loadimage doesn't display the image; it gets the picture data but nothing else. you need the variable to store the data and put it somewhere.  
    
    
bg = loadImage('Artboard 2.png');
    
//textFont(myFont); only after you load the font type in preload
textSize(20);
text('p5*js', 10, 50);
textAlign(CENTER, CENTER);

    
    //in the cages array, adding a new object.an object is an instance of a class.
    //"new" keyword creates an instance. 
    //pushing new object of type "arbitraryCageThingName" which is a class with (parameters);
    //the formula for it : cages.push (new[mandatory formula] classname[that you can choose whatever name for] (parameters[for the object to add within the cages array]));

  cages.push(new arbitraryCageThingName(100, 100, windowWidth/3 - 150, windowHeight - 200));
  cages.push(new arbitraryCageThingName(200 + windowWidth/3 - 150, 100, windowWidth/3 - 150, windowHeight - 200));
  cages.push(new arbitraryCageThingName(300 + 2*(windowWidth/3 - 150), 100, windowWidth/3 - 150, windowHeight - 200));

  //cage.disp()
  pets.push(new petClass(100, 100))
pets.push(new petClass(200 + windowWidth/3 - 150, 100))
pets.push(new petClass(300 + windowWidth/3-150, 100))

}

function draw() {
    clear()
       image(bg, 100, 100, windowWidth-250, windowHeight - 200);
//    image(bg, 100, 100, windowWidth-200, windowHeight - 200);
    //length = the amount of things in the array
    for (i = 0; i < pets.length; i++) {
        //you are assigning the cage variable to have the arbitrarycagethingname at index/position i in the array "cages"
        //index means position
        let cage = cages[i]
        let pet = pets[i]
        
        // logic to move pet; moving the pet closer to the mouse 
        //var newx = mouseX / pet.vel doesn't work'
        var newx = pet.x + (mouseX - pet.x)/pet.vel;
        var newy = pet.y + (mouseY - pet.y)/pet.vel;
        
        // logic to make sure pet does not go outside the cage
        // make sure it doesn't go out the left side
        if (newx <= cage.x + pet.size/2) {
            newx = cage.x + pet.size/2
        }
        // make sure it doesn't go out the right side
        if (newx >= cage.x + cage.width - pet.size/2) {
            newx = cage.x + cage.width - pet.size/2
        }
        // make sure it doesn't go out the top
        if (newy <= cage.y + pet.size/2) {
            newy = cage.y + pet.size/2
        }
        // make sure it doesn't go out the bottom
        if (newy >= cage.y + cage.height - pet.size/2) {
            newy = cage.y + cage.height - pet.size/2
        }
        // actually move the pet (the logic above ensures that if its new position was outisde the cage, it is now at the edge of the cage)
        pet.x = newx
        pet.y = newy
        // draw pet
        pet.disp()
    }
    // draw each of the cages
    for (i=0; i < cages.length; i++) {
        cages[i].disp()
    }
    
    //TEXT
     // Align the text to the right
  // and run drawWords() in the left third of the canvas
//  textAlign(RIGHT);
//  drawWords(width * .15);
//    
//      // Align the text in the center
//  // and run drawWords() in the middle of the canvas
//  textAlign(CENTER);
//  drawWords(width * 0.5);
//
//  // Align the text to the left
//  // and run drawWords() in the right third of the canvas
//  textAlign(LEFT);
//  drawWords(width * 0.75);
}

function mouseMoved(event) {
    //clientX and clientY is an api thing
    mouseX = event.clientX;
    mouseY = event.clientY;
}

//arbitraryCageThingName is a class. in javascript (?) class is basically 
function arbitraryCageThingName(x,y,width, height){
    //"this." is a keyword indicating itself. referencing itself. ex: this.cat = my property called cat is now equal to... 
	this.x = x
	this.y = y
	this.width = width
    this.height = height
	this.disp = function(){
        noFill()
		stroke(51);
		rect(this.x,this.y,this.width,this.height);
	}

}

function petClass(x, y){
    this.x = x
    this.y = y
    this.size = 15
    this.vel = 50//random(100)//random(500) + 100
    this.disp = function() {
        fill('red');
        noStroke();
        //this.x, this.y, this.size, etc. exist because ellipse is an api used by p5js which uses this formula 
        ellipse(this.x, this.y, this.size)
    }
}

//function drawWords(x){
//  // The text() function needs three parameters:
//  // the text to draw, the horizontal position,
//  // and the vertical position
//
//  fill(255);
//  text('shi', x, 290);
//}