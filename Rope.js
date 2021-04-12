class Rope{
    constuructor(body1,Body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var op = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX , y:this.offsetY}
        }

    this.rope = Matter.Constraint.create(op);
    World.add(World,this.rope);
    }
    display(){
    var point1 = this.rope.bodyA.position;
    var point2 = this.rope.bodyB.position;

    strokeWeight(2);

    var Anchor1X = point1.x;
    var Anchor2Y = point1.Y;

    var Anchor2X = point2.x + this.offsetX;
    var Anchor2Y = point2.Y + this.offsetY;

    line(Anchor1X,Anchor2X,Anchor2Y);
}


}