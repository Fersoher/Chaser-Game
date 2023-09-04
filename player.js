function Player(x, y) {
    this.x = x
    this.y = y
    this.direction = 'down'
    var self = this
    this.alive = true


    this.movePlayer = function () {
        
        if (self.alive === true) {
            
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
        this.style()       
        self.drawPlayer()
    }
    this.drawPlayer = function () {
        var playerCell = document.querySelector(`#row${this.y} #col${this.x}`)
        playerCell.classList.add("player")
    }
    this.erase = function () {
        var playerCell = document.querySelector(`#row${this.y} #col${this.x}`)
        playerCell.classList.remove('player')
        //document.querySelector(`#row${self.y} #col${self.x}`).style.transform = "rotate(0deg)"
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

    this.style = function () {
        var pixel = document.querySelector(".player")
        switch (self.direction) {
          case "up":
            pixel.style.backgroundImage ="url(./assets/tanksPlayerUp.png)";
            break;
          case "right":
            pixel.style.backgroundImage ="url(./assets/tanksPlayerRight.png)";
            break;
          case "down":
            pixel.style.backgroundImage ="url(./assets/tanksPlayerDown.png)";
            break;
          case "left":
            pixel.style.backgroundImage ="url(./assets/tanksPlayerLeft.png)";
            break;
        }
    }

 

}








export { Player }


