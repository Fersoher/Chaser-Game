import { Player } from "./player.js";
import { Enemy } from "./Enemy.js"
// Creación del tablero
var player1 = new Player(10, 19)
var enemy1 = new Enemy(10, 3)
var game = {
    createBoard() {
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
        // enemy.showEnemy();
    }
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
game.createBoard()

// Creación de colisiones y movimientos

window.addEventListener('keydown', function (e) {
    console.log(e.key)
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

})


window.addEventListener('keydown', function (e) {
    console.log(e.key)
    if (e.key == 'w') {
        enemy1.direction = "up"
        enemy1.moveEnemy()
    }
    if (e.key == 'a') {
        enemy1.direction = "left"
        enemy1.moveEnemy()
    }
    if (e.key == 's') {
        enemy1.direction = "down"
        enemy1.moveEnemy()
    }
    if (e.key == 'd') {
        enemy1.direction = "right"
        enemy1.moveEnemy()

    }

})

