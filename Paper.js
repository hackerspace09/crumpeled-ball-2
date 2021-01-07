class Paper{
    constructor(){
         var options = {
            isStatic:false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(100,660,20,options);
        World.add(world,this.body);
    }    

    display(){
        var position = this.body.position;
        fill("blue")
        //ellipseMode(RADIUS);
        //ellipse(position.x,position.y,20,20)

        imageMode(CENTER);
        image(this.image,position.x,position.y,70,70)
    }
}