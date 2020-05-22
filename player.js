class Player {
  constructor(x, y, w, h, a) {
    this.position = {
      x: x,
      y: y
    }
    this.width = w;
    this.height = h;
    this.angle = a;
  }
  display() {
    var pos = this.position;
    var angle = this.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke(0);
    fill(col);
    ellipseMode(CENTER);
    ellipse(0, 0, 40, 40);
    rectMode(CORNER);
    //rect(-2, 0, 4, 15);
    triangle(0, 30, 20, 0, -20, 0);
    pop();
  }
  move(x,y){
    this.position.x += x;
    this.position.y += y;
  }
}