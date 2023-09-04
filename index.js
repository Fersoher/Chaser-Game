import { Player } from "./player.js";
import { Enemy } from "./Enemy.js"
import { Bullet } from "./bullet.js"
import { Enemybullet } from "./Enemybullet.js"

var player1 = new Player(10, 19)
var enemy1 = new Enemy(10, 3)
var enemy2 = new Enemy(4, 6)
var enemy3 = new Enemy(14, 5)
const audio = new Audio("assets/Density & Time - MAZE.mp3");

     function createBoard() {
       audio.play();
        var obstacles = [];
        var table = document.getElementById("board");
        boundMap.forEach((row, i) => {
            const tr = document.createElement("tr");
            tr.setAttribute("id", "row" + i);
            row.forEach(function (col, j) {
                const td = document.createElement("td");
                td.setAttribute("id", "col" + j);
                if (col === "-") {
                    td.classList.add("wall");
                    obstacles.push({ x: j, y: i });
                }
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        
        player1.drawPlayer();
        enemy1.drawEnemy()
        enemy2.drawEnemy()
        enemy3.drawEnemy()
    }





let boundMap = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', '-'],
    ['-', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-'],
    ['-', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', '-', '-', '-', '-', '-', ' ', ' ', '-'],
    ['-', ' ', '-', '-', '-', '-', '-', '-', '-', ' ', '-', '-', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-', '-', ' ', '-', '-', '-', '-', '-', '-', '-', ' ', '-'],
    ['-', ' ', ' ', '-', '-', '-', '-', '-', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', '-', '-', '-', '-', '-', '-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', ' ', '-', ' ', '-'],
    ['-', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '-', ' ', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
]

createBoard()

// Creación de colisiones y movimientos

window.addEventListener('keydown', function (e) {
    if (e.key == 'w') {
        player1.direction = "up"
        player1.movePlayer()
    }
    if (e.key == 'a') {
        player1.direction = "left"
        player1.movePlayer()
    }
    if (e.key == 's') {
        player1.direction = "down"
        player1.movePlayer()
    }
    if (e.key == 'd') {
        player1.direction = "right"
        player1.movePlayer()
    
    }
    if (e.key == ' ') {
        var bullet = new Bullet(player1, enemy1 ,enemy2 ,enemy3)
        

        bullet.createShoot()
    }
    
})

function gameLoop(){
    var enemyBullet1 = new Enemybullet(player1,enemy1)
    var enemyBullet2 = new Enemybullet(player1,enemy2)
    var enemyBullet3 = new Enemybullet(player1,enemy3)
    enemy1.moveEnemy()
    enemy2.moveEnemy()
    enemy3.moveEnemy()
    if (enemy1.alive === true) {
    enemyBullet1.createShoot()
   }
   if (enemy2.alive === true) {
    enemyBullet2.createShoot()
   }
   if (enemy3.alive === true) {
    enemyBullet3.createShoot()
   }

}

function interval() {
   
    document.querySelector("#start button")
    let startButton = document.querySelector("#start button");
    startButton.onclick = function () {
    document.querySelector("#start").style.display = "none";
    setInterval(gameLoop, 500)
    document.querySelector("#scenary").style.display = 'block'
  }
}

interval()

