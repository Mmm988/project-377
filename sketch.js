var canva;
var gameState=0;
var contestantCount,contestant;
var database,quiz,question;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);

  database=firebase.database();

  quiz=new Quiz();
  quiz.getState()
  quiz.start()

}


function draw(){
  background(180,120,200);

  fill("black")
  textSize(20)
  text("MY QUIZ GAME",350,50)
  textSize(17)
  text("QUESTION- WHAT STARTS AND END WITH 'E' BUT HAS ONLY ONE LETTER?",50,100)
  text("1. EVERYONE",50,130)
  text("2. EAGLE",50,160)
  text("3. ENVELOPE",50,190)
  text("4. EDGE",50,220)

  if(contestantCount===4){
    quiz.update(1)
  }
  if(gameState===3){
    clear()
    quiz.play()
  }
}
