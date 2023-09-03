function Player(x, y) {
    this.x = x
    this.y = y
    this.direction = 'up'
    var self = this
    


    this.movePlayer = function () {
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
        self.erase()
        self.drawPlayer();
    }
    this.drawPlayer = function () {
        var playerCell = document.querySelector(`#row${this.y} #col${this.x}`)
        playerCell.classList.add("player")
    }
    this.erase = function () {
        var playerCell = document.querySelector('.player')
        playerCell.classList.remove('player')
    }



    this.collisionCheck = function (direction) {
        let x, y;
        switch (direction) {
            case "w":
                self.y - 1;
                self.x;
                return self.checkBoundaries(cell)
                    document.querySelector(`#row${y} #col${x}`)
                ;
            case "a":
                self.y;
                self.x - 1;
                return self.checkBoundaries(cell)
                    document.querySelector(`#row${y} #col${x}`)
                ;
            case "s":
                self.y + 1;
                self.x;
                return self.checkBoundaries(cell)
                    document.querySelector(`#row${y} #col${x}`)
                ;
            case "d":
                self.y;
                self.x + 1;
                return self.checkBoundaries(cell)
                    document.querySelector(`#row${y} #col${x}`)
                ;
        }
    }
    function checkBoundaries(cell) {
        //const boundaries = ["wall", "enemy", "player"];
        return cell.getAttribute("class") === "wall" || cell.getAttribute("class") === "enemy";
    }



}











export { Player }


