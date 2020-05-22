var player;
var col = "white"
var bullets = [];
var enemies = [];
var laser;
var life = 10;
var line1;
var counter = 0;
var state = 0;

function preload() {
  laser = loadSound('laser.ogg');
}

function setup() {
  createCanvas(400, 400);
  player = new Player(width / 2, height / 2, 20, 20, 0);
  angleMode(DEGREES)
  textAlign(CENTER, CENTER);
  textSize(15);
}

function draw() {
  if (state == 0) {

    background(51);
    //console.log(line1);
    player.display();
    fill(0);
    if (life > 0) {
      text(life, player.position.x, player.position.y);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.move(1.5, 0)
      player.angle += 5
    } else if (keyIsDown(LEFT_ARROW)) {
      player.move(-1.5, 0);
      player.angle -= 5
    }
    if (life < 0 && state == 0) {
      push();
      background(0);
      textSize(100);
      fill(255);
      text("OVER", 200, 200);
      pop();
      state = 1;
    }
    if (bullets.length > 5) {
      var last = bullets[5];
      bullets = []
      bullets.push(last);
    }
    if (player.position.x > 400) {
      player.position.x = 0;
    } else if (player.position.x < 0) {
      player.position.x = 400;
    }
    for (var e in enemies) {
      for (var b in bullets) {
        var enemy = enemies[e];
        var bullet = bullets[b];
        xRange = {
          1: enemy.position.x - 5,
          2: enemy.position.x + 5,
        }
      }
    }
    if (counter > 5) {
      life += 10;
      counter = 0;
    }
    //console.log(bullets.length)
    spawnEnemy();
    for (var bul in bullets) {
      bullets[bul].display()
    }
    for (var en in enemies) {
      enemies[en].display();
      enemies[en].move();
      if (enemies[en].position.x < player.position.x + 20 && enemies[en].position.y < player.position.y + 20 && enemies[en].position.x > player.position.x - 20 && enemies[en].position.y > player.position.y - 20) {
        col = "grey"
        life--;
      } else {
        col = "white";
      }
    }
  }
}

function spawnBullet() {
  var bull = new Bullet(player.position.x, player.position.y, 30, player.angle);
  bullets.push(bull);
}

function spawnEnemy() {
  if (frameCount % 100 == 0) {
    var rand = round(random());
    var enemy
    switch (rand) {
      case 0:
        enemy = new Enemy(round(random()) * width, random(height), 0);
        enemies.push(enemy);
        break;
      case 1:
        enemy = new Enemy(random(width), round(random()) * height, 0);
        enemies.push(enemy);
        break;
      default:
        break;
    }
    if (enemy.position.x < player.position.x) {
      enemy.speed.x = random(1, 3);
    } else { //:P
      enemy.speed.x = -random(1, 3);
    }
    if (enemy.position.y < player.position.y) {
      enemy.speed.y = random(1, 3);
    } else { //:P
      enemy.speed.y = -random(1, 3);
    }
  }
}

function keyPressed() {
  if (keyIsDown(32)) {
    spawnBullet();
    console.log(line1);
    counter++;
    laser.play();
  }
}