class Paper
{
	constructor(x,y,r)
	{
		var options={
				restitution:0.4,
                friction:0.5,
                density:0.3	
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			imageMode(CENTER)
            image(this.image,0,0,this.r,this.r)
           // ellipse(0,0,this.r,this.r)
			pop()
			
	}

}
