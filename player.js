function Player(x, y) {
    this.x = x
    this.y = y
    this.direction = 'down'
    var self = this
    this.alive = true

    this.movePlayer = function () {
        if (self.alive) {
            switch (self.direction) {
                case 'up':
                    if (!checkBoundaries(document.querySelector(`#row${self.y - 1} #col${self.x}`))) {
                        self.y--
                    } 
                    break
                case 'left':
                    if (!checkBoundaries(document.querySelector(`#row${self.y} #col${self.x - 1}`))) {
                        self.x--
                    } 
                    break
                case 'down':
                    if (!checkBoundaries(document.querySelector(`#row${self.y + 1} #col${self.x}`))) {
                        self.y++
                    } 
                    break
                case 'right':
                    if (!checkBoundaries(document.querySelector(`#row${self.y} #col${self.x + 1}`))) {
                        self.x++
                    } 
                    break
            }
            self.erase()
            self.drawPlayer()
            
        } else {
            document.querySelector("#game-over").style.display = "none"
            document.querySelector(".tankgif").style.display = "flex"
            document.querySelector("#board").style.display = "none"
            document.querySelector("#scenary").style.display = "none"
        
            function gameOverScreen() {
                document.querySelector("#game-over").style.display = "block"
                document.querySelector("#board").style.display = "none"
                document.querySelector(".tankgif").style.display = "none"
            }

            setTimeout(gameOverScreen, 5000)

        }
    }

    this.drawPlayer = function () {
        var playerCell = document.querySelector(`#row${this.y} #col${this.x}`)
        playerCell.classList.add("player")
        playerCell.classList.add(self.direction)
    }

    this.erase = function () {
        var playerCell = document.querySelector('.player')
        playerCell.classList.remove('player')
        var directions = ['up', 'down', 'left', 'right']
        directions.forEach((direction) => {
            playerCell.classList.remove(direction)
        })
    }


    function checkBoundaries(cell) {
        return cell.classList.contains('wall') || cell.classList.contains("enemy")
    }


    let startButton = document.querySelector(".try-again")
    startButton.onclick = function () {
        location.reload()
    }

}

export { Player }