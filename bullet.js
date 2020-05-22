class Bullet {
  constructor(x1, y1, w, a) {
    this.position = {
      x: x1,
      y: y1,
    }
    this.width = w;
    this.angle = a;
    this.y = 0;
  }
  display() {
    var pos = this.position;
    var angle = this.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("green");
    strokeWeight(2);
    noFill(255);
    line1 = line(0, this.y, 0, this.width+this.y);
    this.y+=10;
    pop();
  }
  offScreen() {
    if(this.position.x>width || this.position.x<0
      || this.position.y<0 || this.position.y>height){
      return true;
    } else {
      return false;
    }
  }
}