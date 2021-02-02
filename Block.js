class Block{
    constructor(x,y,width,height){
        var options = {
            //isStatic:true,
            'restitution':0.8,
            'friction':2.0,
            'density':0.05
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        
    }
    display(){
        if(this.body.speed<5){
            var angle = this.body.angle;
            var pos = this.body.position;
            push();
           translate(this.body.position.x,this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            stroke("maroon");
            fill("white")
            rect(0,0, this.width, this.height);
            pop();
        }

        else{
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity - 5
            tint(255,this.visiblity);
            pop();
        }
    }
        score(){
            if(this.visiblity < 0 && this.visiblity >- 1005){
              score++
            }
        }
    }