class Fichas{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.weight=70
    this.diameter=70
  }
  beRect(){
    noFill();
    strokeWeight(8);
    rect(this.x,this.y,this.weight);
  }
  beZero(){
    noFill();
    strokeWeight(8);
    circle(this.x,this.y,this.diameter)

  }
  moving(mx,my){
    this.x=mx;
    this.y=my;
  }



}

//0=X, 1=o
let turn = 0;
let maxTurn =0;
let cuadrados = [];
let cualquiera = 0;
let nuevaFichaR = [];
let nuevaFichaZ = [];


function setup() {
  createCanvas(900, 900);
  for (let index = 0; index < 5; index++) {
    nuevaFichaR.push(new Array)
  }

  for (let index = 0; index < 4; index++) {
    nuevaFichaZ.push(new Array)
  }

  for (let index = 0; index < 3; index++) {
    cuadrados.push(new Array(3));
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cualquiera++
      cuadrados[i][j] = cualquiera;
      console.log(cuadrados);   
      strokeWeight(2);
      rect(150+(100*i),150+(100*j),290);
    }
    
  }
}


function draw() {
  background(220);
  
  
   
    if (turn == 0){
      for (let i = 0; i < 5; i++) {
        
        nuevaFichaR [i] = new Fichas (50,50);
        nuevaFichaR[i].beRect();
        
      }

    
    } else if (turn == 1){
      for (let i = 0; i < 4; i++) {
        nuevaFichaZ [i] = new Fichas (50,50);
        nuevaFichaZ[i].beZero();
        
      }
       
    }
    
  
  if (turn == 0){
    
  } else if (turn == 1){
    
  }
  
 
  
}

function mousePressed() {

  if (maxTurn < 9){

    if (turn == 0){
      turn = 1;
      maxTurn++;
      
    } else if (turn == 1){
      turn = 0;
      maxTurn++;
    }
  }
  console.log(maxTurn);
}

function mouseMoved(){
  if (turn == 0){
    for (let i = 0; i < 5; i++) {
      nuevaFichaR[i].moving (mouseX, mouseY);
      
    }

  
  } else if (turn == 1){
    for (let i = 0; i < 4; i++) {
      nuevaFichaZ[i].moving (mouseX, mouseY);
      
    }
     
  }
  

}
