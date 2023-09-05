function Enemy(x, y) {

    this.x = x
    this.y = y
    this.direction = 'downenemy'
    var self = this
    this.alive = true

    this.checkBullet = function () {
        var position = (document.querySelector(`#row${self.y} #col${self.x}`))
        if (position.classList.contains("bullet")) {
            this.alive = false
        }
    }
    this.randomMove = function () {

        var move = ["upenemy", "leftenemy", "rightenemy", "downenemy"]
        this.direction = move[Math.floor(Math.random() * 4)]

    }
    this.moveEnemy = function () {
        this.checkBullet()
        if (self.alive === true) {

            var x = self.x
            var y = self.y

            self.randomMove()
            switch (self.direction) {
                case 'upenemy':
                    if (checkBoundaries(document.querySelector(`#row${self.y - 1} #col${self.x}`))) {

                    } else {
                        self.y--
                    }
                    break
                case 'leftenemy':
                    if (checkBoundaries(document.querySelector(`#row${self.y} #col${self.x - 1}`))) {

                    } else {
                        self.x--
                    }
                    break
                case 'downenemy':
                    if (checkBoundaries(document.querySelector(`#row${self.y + 1} #col${self.x}`))) {

                    } else {
                        self.y++
                    }
                    break
                case 'rightenemy':
                    if (checkBoundaries(document.querySelector(`#row${self.y} #col${self.x + 1}`))) {

                    } else {
                        self.x++
                    }
                    break

            }

        } else {
            
        }
        self.erase(x,y)
        self.drawEnemy();

    }
    this.drawEnemy = function () {
        var enemyCell = document.querySelector(`#row${this.y} #col${this.x}`)
        enemyCell.classList.add("enemy")
        enemyCell.classList.add(self.direction)
    }
    
    this.erase = function (x,y) {
        var enemyCell = document.querySelector(`#row${y} #col${x}`)
        enemyCell.classList.remove('enemy')
        var directions = ['upenemy', 'downenemy', 'leftenemy', 'rightenemy']
        directions.forEach((direction) => {
            enemyCell.classList.remove(direction)
        })
        
    }

    this.collisionCheck = function (direction) {
        let x, y;
        switch (this.direction) {
            case "upenemy":
                self.y - 1;
                self.x;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
            case "leftenemy":
                self.y;
                self.x - 1;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
            case "downenemy":
                self.y + 1;
                self.x;
                return self.checkBoundaries(cell)
                document.querySelector(`#row${y} #col${x}`)
                    ;
            case "rightenemy":
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

