function Enemy(x, y) {

    this.x = x
    this.y = y
    this.direction = ''
    var self = this
    this.alive = true


    this.randomMove = function () {

        var move = ["up", "left", "right", "down"]
        this.direction = move[Math.floor(Math.random() * 4)]

    }
    this.moveEnemy = function () {
        if (self.alive === true) {

            self.randomMove()
            switch (self.direction) {
                case 'up':
                    if (checkBoundaries(document.querySelector(`#row${self.y - 1} #col${self.x}`))) {

                    } else {
                        self.y--
                    }
                    break
                case 'left':
                    if (checkBoundaries(document.querySelector(`#row${self.y} #col${self.x - 1}`))) {

                    } else {
                        self.x--
                    }
                    break
                case 'down':
                    if (checkBoundaries(document.querySelector(`#row${self.y + 1} #col${self.x}`))) {

                    } else {
                        self.y++
                    }
                    break
                case 'right':
                    if (checkBoundaries(document.querySelector(`#row${self.y} #col${self.x + 1}`))) {

                    } else {
                        self.x++
                    }
                    break

            }
            
        } else {
            document.querySelector(`#row${self.y} #col${self.x}`)
        }
        self.erase()
        self.drawEnemy();

    }
    this.drawEnemy = function () {
        var enemyCell = document.querySelector(`#row${this.y} #col${this.x}`)
        enemyCell.classList.add("enemy")
    }
    this.erase = function () {
        var enemyCell = document.querySelector(`#row${this.y-1} #col${this.x}`)
        enemyCell.classList.remove('enemy')
        var enemyCell = document.querySelector(`#row${this.y+1} #col${this.x}`)
        enemyCell.classList.remove('enemy')
        var enemyCell = document.querySelector(`#row${this.y} #col${this.x-1}`)
        enemyCell.classList.remove('enemy')
        var enemyCell = document.querySelector(`#row${this.y} #col${this.x+1}`)
        enemyCell.classList.remove('enemy')
    }

    this.collisionCheck = function (direction) {
        let x, y;
        switch (this.direction) {
            case "up":
                self.y - 1;
                self.x;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
            case "left":
                self.y;
                self.x - 1;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
            case "down":
                self.y + 1;
                self.x;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
            case "right":
                self.y;
                self.x + 1;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
        }
    }
    function checkBoundaries(cell) {
        //const boundaries = ["wall", "enemy", "enemy"];
        return cell.getAttribute("class") === "wall" || cell.getAttribute("class") === "player";
    }


}

export { Enemy }

