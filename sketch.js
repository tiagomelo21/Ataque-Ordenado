let img1
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10
var tela = 1
tentativa=36
erros=0
acertos=0
var cont, x, y

function preload(){
   img1=loadImage("20201010_153500 (1).jpg")
  img2=loadImage("images (14).jpg")
 img3=loadImage("20200922_191016 (3).jpg")
   img4=loadImage("Foto_Ida (1).jpg")
  img5=loadImage("agua-visto-de-cima_1122-1164.jpg")
 img6=loadImage("tumblr_static_1228302873-content_640_v2.gif")
   img7=loadImage("explosion.gif")
  img8=loadImage("agua-visto-de-cima_1122-11600-1.jpg")
    img9=loadImage("ex.gif")
  img10=loadImage("tuto.png")
}
function setup() {
  createCanvas(850,470)
}

function draw() {

  if(tela == 1){
    
  image(img1,0,0);
    textAlign(CENTER)
    textSize(50)
    fill(220)
    noStroke(0)
    text("´",428,435)
    //jogar//
    if(mouseX>270    &&    mouseX<270+371           && mouseY>176         &&         mouseY<176+130)
      
  
{     
     
  if(mouseIsPressed){
    tela=2
  }
  
  
    }
   
    
    //tutorial//
     if(mouseX>304 &&    mouseX<304+310     && mouseY>310   &&         mouseY<310+65)
  
{     
     
  
   if(mouseIsPressed){
    tela=3
  }
  
    }
   
    
    
    //creditos//
    if(mouseX>337 &&    mouseX<337+236 && mouseY>398  &&         mouseY<398+52)
  
{     
  
  
   if(mouseIsPressed){
    tela=4
  }
  
  
    }
  
    
    
}
 else if(tela==2){
image(img8,0,0)
  if(mouseX>5 &&    mouseX<5+125 && mouseY>420  &&         mouseY<420+30){     
  
   if(mouseIsPressed){
    tela=1
  }
    
}
   if(mouseX>140 &&    mouseX<140+70 && mouseY>420  &&         mouseY<420+30){     
  
   if(mouseIsPressed){
    tela=10
  }
    
}
    textAlign(CENTER)
    textSize(21)
    fill(20)
    noStroke()
    text(tentativa,425,445)
   text("Erros = " + erros,550,435)
   text("Acertos = "+ acertos,550,455)
  if(acertos==19){tela=8}
  if(tentativa == 0){tela=9}
if(mouseX>680 &&    mouseX<680+150 && mouseY>420  &&         mouseY<420+30){     
  
   if(mouseIsPressed){
 
  for(cont=1;cont>0;cont--) {
   tela=5
tentativa=tentativa-1
 
   }
  }
  
  


  
 }

 
 
 }
  else if(tela ==3){
    image(img2,0,0)
    textAlign(CENTER)
    textSize(21)
    fill(240)
    noStroke()
    text("Matemática 6º Ano",100,40)
    text("Habilidade:(EF06MA16)",120,70)
    text("O jogo é baseado no jogo clássico: batalha naval.",425,230)
    text("O aluno terá que identificar as coordenadas de onde estão as embarcações.",425,270)

    
    stroke(240)
    noFill(0)
    rect(355,375,145,50,15)
    textSize(21)
    noStroke(0)
    fill(240)
    text("Como jogar",425,400)

    if(mouseX>355 &&    mouseX<355+145 && mouseY>375  &&         mouseY<375+50)
  
{     
  
   if(mouseIsPressed){
    tela=10
  }
    
}
}
  else if(tela ==4){
    image(img2,0,0)
     image(img3,20,20)
    image(img4,20,200)
    textSize(24)
    textAlign(CENTER)
    fill(240)
    noStroke()
    
    text("Programador(a):",240,50)
    text("Tiago Oliveira Melo",255,80)
    text("Educador(a):",222,230)
    text("Idalmis Milian Sardina Martins",310,260)
    
    
    
    
        text("VOLTAR",800,25)
  if(mouseX>750 &&    mouseX<750+100 && mouseY>5  &&         mouseY<5+30)
  
{     
  
   if(mouseIsPressed){
    tela=1
  }
    
}
    
  }
  else if(tela==5){
    background(20)
    stroke(240)
    fill(20)
    rect(380,222,90,40,15)
    textAlign(CENTER)
    textSize(21)
    fill(240)
    noStroke()
    text("digite as cordenadas de ataque",425,200)
    text("atacar",425,250)
   if(mouseX>380 &&    mouseX<380+90 && mouseY>222  &&         mouseY<222+40){     
  
   if(mouseIsPressed){
    x= parseFloat(prompt("cordenada x"))
    y= parseFloat(prompt("cordenada y"))
    if((x==-5 || x==-4) && y==2){
      tela=7
    }
    else if(x==-5 && (y==-2 || y==-3)){
      tela=7
    }
     else if(x==-2 && (y==4 || y==3 || y==2 || y==1 || y==-1 || y==-2 || y==-3)){
       tela=7
     }
     else if(x==2 && (y==-1 || y==-2)){
       tela=7
     }
     else if((x==3 || x==4 || x==5) && y==2){
       tela=7
     }
     else if(x==5 && (y==-1 || y==-2 || y==-3)){
       tela=7
     }
     else{
       tela=6
     }
  }
    
}

  }
  else if(tela==6){
   background(0)
    image(img6,80,0)
    stroke(240)
    fill(20)
    rect(310,270,230,50,15)
    textAlign(CENTER)
    textSize(21)
    fill(240)
    noStroke()
    text("você errou o alvo",425,250)
    text("ok, tentar de novo",425,300)
   if(mouseX>310 &&    mouseX<310+230 && mouseY>270  &&         mouseY<270+50){     
  
   if(mouseIsPressed){
  for(cont=1;cont>0;cont--) {
   tela=2
  erros=erros+1
  }
   }}}
  else if(tela==7){
   background(0)
    image(img7,300,70)
    stroke(240)
    fill(20)
    rect(290,270,270,50,15)
    textAlign(CENTER)
    textSize(21)
    fill(240)
    noStroke(0)
    text("você acertou o alvo !",425,250)
    text("ok, fazer outro lançamento",425,300)

   if(mouseX>290 &&    mouseX<290+270 && mouseY>270  &&         mouseY<270+50){     
  
   if(mouseIsPressed){
  for(cont=1;cont>0;cont--) {
  tela=2
  acertos=acertos+1
  }
  }
   }}
  else if(tela==8){
   background(0)

    stroke(240)
    fill(20)
    rect(290,320,270,50,15)
    textAlign(CENTER)
    textSize(50)
    fill(240)
    noStroke(0)
    text("PARABÉNS VOCÊ GANHOU !",425,200)
    textAlign(CENTER)
    textSize(21)
    text("ir para o menu",425,350)

   if(mouseX>290 &&    mouseX<290+270 && mouseY>320  &&         mouseY<320+50){     
  
   if(mouseIsPressed){
  tela=1
   }
   }}
  else if(tela==9){
   background(0)

    stroke(240)
    fill(20)
    rect(290,320,270,50,15)
    textAlign(CENTER)
    textSize(50)
    fill(240)
    noStroke(0)
    text("GAME OVER",425,200)
    textAlign(CENTER)
    textSize(21)
    text("ir para o menu",425,350)

   if(mouseX>290 &&    mouseX<290+270 && mouseY>320  &&         mouseY<320+50){     
  
   if(mouseIsPressed){
  tela=1
   }
   }}
    else if(tela==10){
   image(img10,0,0)

    stroke(240)
    noFill(0)
    rect(650,380,180,60,15)

   if(mouseX>650&&   mouseX<650+180&&mouseY>380  &&         mouseY<380+60){     
  
   if(mouseIsPressed){
  tela=1
   }
   }}
  
}