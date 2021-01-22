class Block{
    constructor(x,y,width,height){
        var options = {
            //isStatic:true,
            'restitution':0.8,
            'friction':2.0,
            'density':2.0
        }
        this.visibility = 225;
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
            this.visibility = this.visibility - 5
            tint(255,this.visibility);
            pop();
        }
    }
        score(){
            if(this.visibility < 0 && this.visiblity >- 1005){
              score++
            }
        }
    }