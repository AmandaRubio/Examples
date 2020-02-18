var player;
var bullets = [];
var shields = [];
var shieldNum = 4;
var invaderCols = 8;
var invaderRows = 4;

var alienField;
var invaderSprite;

var button; 

function preload() {
    invaderSprite = loadImage('alien.png');
}

function setup() {
    createCanvas(700, 750);
    button = createButton('restart');
    button.size(100, 50);
    button.position(width/2 - 50, height/2 + width/10);
    button.mouseClicked(restart);
    button.hide();

    player = new Player();

    alienField = new AlienField(width / 2, height / 4, invaderRows, invaderCols, invaderSprite);
    alienField.init();

    for (var i = 0; i < shieldNum; i++) {
        shields.push(new Shield(width * 0.1 + (width * 0.8) / (shieldNum - 1) * i, height - 150));
        shields[i].init();
    }

}

function draw() {
    background(0);

    if (!player.gameOver && !alienField.gameOver && !alienField.win) {
        for (var i = bullets.length - 1; i >= 0; i--) {
            bullets[i].update();
            bullets[i].render();

            if (bullets[i].despawn()) {
                bullets.splice(i, 1);
            }
        }

        for (var i = 0; i < shieldNum; i++) {
            shields[i].render();
            shields[i].update(bullets);
        }

        alienField.update();
        player.score += alienField.alienHit(bullets);
        alienField.alienShoot(bullets);
        alienField.render();

        player.render();
        player.update();
        player.hit(bullets);
    } else if (!alienField.win && (player.gameOver || alienField.gameOver)) {
        textSize(width / 10);
        fill(255);
        textAlign(CENTER, CENTER);
        text("GAME OVER", width / 2, height / 2 - width / 10);
        text("Score: " + player.score, width / 2, height / 2);
        button.show();
    } else if (alienField.win) {
        textSize(width / 10);
        fill(255);
        textAlign(CENTER, CENTER);
        text("YOU WIN", width / 2, height / 2 - width / 10);
        text("Score: " + player.score, width / 2, height / 2);
        button.show();
    }
}

function restart() {
    player.reset();
    alienField.reset(width / 2, height / 4, invaderRows, invaderCols, invaderSprite);

    for (var i = 0; i < shieldNum; i++) {
        shields[i].reset();
    }
    button.hide();
    bullets = [];
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        player.moveRight = true;
    } else if (keyCode === LEFT_ARROW) {
        player.moveLeft = true;
    } else if (key === ' ') {
        bullets.push(player.shoot());
    }
}

function keyReleased() {
    player.moveLeft = false;
    player.moveRight = false;
}
