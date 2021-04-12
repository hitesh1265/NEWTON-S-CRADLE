class Roof {
    constuructor(x,y,width,hight){
        this.body = Bodies.rectangle(x,y,width,hight,{isStatic:true});
        this.width = width;
        this.hight = hight;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this.body.position.y,this.width,this.hight);
        pop();
    }
}