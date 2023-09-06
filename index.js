import { Player } from "./player.js";
import { Enemy } from "./Enemy.js"
import { Bullet } from "./bullet.js"
import { Enemybullet } from "./Enemybullet.js"

var player1 = new Player(10, 19)
var enemy1 = new Enemy(10, 3)
var enemy2 = new Enemy(4, 6)
var enemy3 = new Enemy(14, 5)
const audio = new Audio("assets/Density & Time - MAZE.mp3");
audio.play();
     function createBoard() {
       
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

        if (player1.alive){
            var bullet = new Bullet(player1)
            bullet.createShoot()
        }
        

        

        
    }
    
})

function gameLoop(){
    
    if (enemy1.alive) {
        enemy1.moveEnemy()
        var enemyBullet1 = new Enemybullet(player1,enemy1)    
        enemyBullet1.createShoot()
        
    }
    if (enemy2.alive) {
        enemy2.moveEnemy()
        var enemyBullet2 = new Enemybullet(player1,enemy2)
        enemyBullet2.createShoot()
        
    }
    if (enemy3.alive) {
        enemy3.moveEnemy()
        var enemyBullet3 = new Enemybullet(player1,enemy3)
        enemyBullet3.createShoot()
        
    }   
    function winScreen() {
        if (enemy1.alive === false && enemy2.alive === false && enemy3.alive === false) {
             document.querySelector(".wins").style.display = "block";
             document.querySelector("#board").style.display = "none";
         }
         function winagain() {
             let tryButton = document.querySelector(".winagain");
             tryButton.onclick = function () {
                 location.reload();
             };
         }
 
         winagain();
 
     }
 
 
     winScreen()
 }
 
 
 function gameOverbutton() {
 
         document.querySelector("#start button")
     let startButton = document.querySelector("#start button");
     startButton.onclick = function () {
         createBoard()
         document.querySelector("#start").style.display = "none";
         document.querySelector("#scenary").style.display = 'block'}
     }
 
 
 gameOverbutton()
 setInterval(gameLoop, 500)

