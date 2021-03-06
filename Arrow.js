class Arrow{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.8,
            friction:1,
            density:1.0
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/arrow0.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var Pos=this.body.position;	
		push();
        translate(Pos.x,Pos.y);
        scale(5);
		rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2);
        pop()
 }
}