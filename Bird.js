class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1=loadImage("sprites/smoke.png");

    this.trajectory=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    // position=[200,50];
    //[205,45]
    //[210,50]
    //              0         1       2
    //trajectory=[[200,50],[205,45],[210,50]];    3
     //           00 , 01   10 ,11   20 ,21
    if(this.body.position.x>200&&this.body.velocity.x>5){

    var position=[this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }

for  (var index = 0; index <this.trajectory.length; index++) {


  image(this.image1,this.trajectory[index][0],this.trajectory[index][1]);
  }




   }
}
