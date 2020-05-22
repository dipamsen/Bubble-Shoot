class Enemy {
  constructor(x, y, a) {
    this.position = {
      x: x,
      y: y
    }
    this.speed = {
      x: 2,
      y: 3
    }
    this.width = 10;
    this.height = 10;
    this.angle = a;
  }
  display() {
    var pos = this.position;
    var angle = this.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke(0);
    fill("red");
    rectMode(CENTER);
    rect(0, 0, 10, 10);
    pop();
  }
  move() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}