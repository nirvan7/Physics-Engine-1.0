class Balloon{
    constructor(x, y, diameter) {
        var options = {
            isStatic:false,
            'restitution':0.0001,
            'friction':0.0015,
             'density':1.0
        }
        this.x=x;
        this.y=y;
        this.diameter = diameter;
        this.body = Bodies.circle(x, y, diameter,options);
        this.image1=loadImage ("images/blue_balloon0.png");
    //    this.image2=loadImage ("images/green_balloon0.png");
     //   this.image3=loadImage ("images/red_balloon0.png");
    //    this.image4=loadImage ("images/pink_balloon0.png");
        World.add(world, this.body);
      }
      display(){
       var pos =this.body.position;
      push();
     translate(pos.x,pos.y);
      scale(10);
    //  switch(rand){
    //    case 1:image(this.image1, 0, 0,this.diameter,this.diameter)
    //    break;
    //    case 2:image(this.image2, 0, 0,this.diameter,this.diameter);
    //  break;
   //     case 3:image(this.image3, 0, 0,this.diameter,this.diameter);
    //    break;
    //    case 4:image(this.image4, 0, 0,this.diameter,this.diameter);
    //    break;
    //    default:
     //   break;    
     // }

     image(this.image1, 0, 0,this.diameter,this.diameter);
      pop();
      }
    }