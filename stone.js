class Stone{
    constructor(x, y, r)
    {
        var options={
            isStatic:false,
            restitution :0.5,
            friction :1,
            density :1.2,
            }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("stone.png");
        this.body=(this.x, this.y, options);
        World.add(world, this.body);
    }
    display()
    {
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        fill(255,0,255)
        imageMode(CENTER)
        ellipseMode(RADIUS)
        image(this.image, 0, 0, this.r*2, this.r*2)
        pop()
    }

}