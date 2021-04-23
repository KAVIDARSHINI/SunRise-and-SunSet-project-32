const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImage;

var back;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    // add condition to check if any background image is there to add
    if(backImage){
        background(backImage);
        strokeWeight(4);
        stroke("black");
        textSize(30);
        fill(229, 229, 229);
        textFont("algerian");
      }

    Engine.update(engine);

    // write code to display time in correct format here.
    if(hour>=12){
        text("Time :"+ hour % 12 + "PM",50,50);
        text(" good morning ",800,50);
      }else if(hour==0){
        text("Time : 12 AM",50,50);
        text(" good afternoon ",800,50);
      }else{
        text("Time :"+ hour % 12 + "AM",50,50);
        text(" good evening ",800,50);
      }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var check = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var JSONcheck = await check.json();
    console.log(JSONcheck);

    var DT = JSONcheck.datetime;
    console.log(DT);
    
    // write code slice the datetime
    hour = DT.slice(11,13);
    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
     if(hour >= 05 && hour <= 06){
       back = "sunrise1.png";    
     } else if(hour >= 06 && hour <= 07){
       back = "sunrise2.png"; 
     } else if(hour >= 07 && hour <= 10){
       back = "sunrise3.png";
     } else if(hour >= 10 && hour <= 12){
       back = "sunrise4.png";
     } else if(hour >= 12 && hour <= 14){
       back = "sunrise5.png";
     } else if(hour >= 14 && hour <= 15){
       back = "sunrise6.png";
     } else if(hour >= 15 && hour <= 17){
       back = "sunset7.png";
     } else if(hour >= 17 && hour <= 18){
       back = "sunset8.png";
     } else if(hour >= 18 && hour <= 20){
       back = "sunset9.png";
     } else if(hour >= 20 && hour <= 21){
       back = "sunset10.png";
     } else if(hour >= 21 && hour <= 23){
      back = "sunset11.png";
     } else{
         back = "sunset12.png";
     }
      
    //load the image in backgroundImg variable here
        backImage = loadImage(back);
        
    }
