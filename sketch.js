//Create variables here
var Dog,HappyDog,Dog1,Database,foodS,foodStock;

function preload()
{
  //load images here
  Dog = loadImage("images/dogImg");
  HappyDog = loadImage("images/dogImg1");
}

function setup() {
  createCanvas(500 , 500);
  
  Dog1 = createSprite(250,250,20,20);
  Dog1.addImage(Dog);
  Dog1.addImage(HappyDog);
  
  foodStock = database.ref("food");
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(HappyDog);
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("green");
  stroke("white");
  strokeWeight(2);
  text("Food : " + food,250,100);
 text("Note : Press UP_ARROW to feed the dog",200,400);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;

  }else{
    x = x-1;
  }
  
  database.ref("/").update({
    food :x 
  })
}

