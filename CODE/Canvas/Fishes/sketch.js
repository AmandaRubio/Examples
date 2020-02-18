var fishes = [];
var G = 1;

function setup(){
    createCanvas(windowWidth, windowHeight);
    for(var i = 0; i < 100; i++){
        fishes[i] = new Fish(1, random(-200, 0), random(height));
    }
}

function draw(){
    background(0, 44, 111);
    for(var i = 0; i < fishes.lenght; i++){
        for(var j = 0; j < fishes.lenght; j++){
            if(i !== j){
                var force = fishes[j].calculateAttraction(fishes[i]);
                fishes[i].applyForce(force);
            }
        }
        fishes[i].move();
        fishes[i].show();
        fishes[i].checkEdges();
    }
}

function Fish(m,x,y){
    this.mass = m;
    this.pos= createVector(x,y);
    this.vel=createVector(random(2,6), random(-10,10));
    this.acc=createVector(0,0);

    this.applyForce = function(force){
        var f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    this.move = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        if(this.vel.y > 0){
            this.vel.y--;
        }
        if(this.vel.y < 0){
            this.vel.y++;
        }
        this.acc.mult(0);
    }
    this.show = function(){
        stroke(255);
        strokeWeight(4);
        point(this.pos.x,this.pos.y);
    }

    this.checkEdges = function(){
        if(this.pos.y > height){
            this.vel.y = random(-10);
        }
    };

    this.calculateAttraction = function(m){
        //Direction of force
        var force = p5.Vector.sub(this.pos, m.pos);
        //Distance between objects
        var distance = force.mag();
        //Limiting the distance to eliminate
        distance = constrain(distance, 5.0, 25.0);
        //Normalize vector
        force.normalize();
        //Calculate gravitional force
        var strength = (G * this.mass * m.mass) / (distance * distance);
        //Get force vector --> magnitud * direction
        force.mult(strength);
        return force;
    };
}

function mousePressed(){
    reset();
}

function reset(){
    for(var i = 0; i< 100; i++){
        fishes[i] = new Fish(1, random(-200,0), random(height));
    }
}