var player,form,game;
var level1Img, level2Img, level3Img;
var rand, word1;
var gameState= "start"
var button1, button2, button3;




var level1= ["hand", "too", "car","left", "then", "cool","read","grow", "one", "list", "see","food", "glad", 
             "life", "type", "most", "code", "on", "find", "she", "lit", "leo","wave", "ace", "bee","cope", "dare",
             "moon", "navy", "yum", "pure", "dog", "pure", "rich", "song", "life", "zone","wise","move", 
             "wine", "van", "will","soul","opt" ,"try", "bro", "king", "sure", "nice", "date"]

console.log(level1.length)

function preload(){
    level1Img= loadImage("images/level1.png" )
}

function setup(){

    createCanvas(windowWidth-25,windowHeight-35);
    button1= createButton("Level 1")
     button2= createButton("Level 2")
     button3= createButton("Level 3")

    button1.position((windowWidth/2)-150, windowHeight/2)
    button2.position(windowWidth/2, windowHeight/2)
    button3.position((windowWidth/2)+150, windowHeight/2)

     //word1= createSprite(0, 50, 50,20)
     //word1.shapeColor="white"
     
}

function draw(){


        if (gameState==="start"){
            button1.mousePressed(()=>{
                background("level1Img")
                button1.hide()
                button2.hide()
                button3.hide()
                word1= createSprite(0, 50, 50,20)
                //word1.shapeColor="white"
                word1.velocityX=Math.round(random(1,4))
                gameState= "play"
                console.log(word1.velocityX)
                
               drawSprites()
               text(level1[Math.round(random(0,49))], word1.x, word1.y)

            })

        }
    }