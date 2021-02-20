class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length:0.0000000000000000001
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
        if (this.sling.bodyA){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(1);
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
 }
    fly(){
        this.sling.bodyA=null
    }
}
