class Boat {
    constructor(x, y, width, height,boatPos) {
      var options = {
        restitution:0.8,
        density:1,
        friction:1
      };
      this.width = width;
      this.height = height;
      this.boatPosition=boatPos
      this.image=loadImage("assets/boat.png")
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
        var angle=this.body.angle
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
    
      imageMode(CENTER);
    image(this.image,0, this.boatPosition, this.width, this.height);
    noTint()
      pop();
    }
  }
  