function Player(x, y) {
    this.x = x
    this.y = y
    this.direction = 'down'
    var self = this
    this.alive = true


    this.movePlayer = function () {
        var lastX = this.x
        var lastY = this.y
        
        if (self.alive === true) {   
            switch (self.direction) {  
                case 'up':   
                    
                    if (checkBoundaries(document.querySelector(`#row${self.y - 1} #col${self.x}`))) {
                        lastY = this.y-1

                    } else {    
                        self.y--
                        document.querySelector(`#row${self.y} #col${self.x}`).style.transform= "rotate(180deg)"
                        
                                                
                    }
                    break
                case 'left':

                    if (checkBoundaries(document.querySelector(`#row${self.y} #col${self.x - 1}`))) {
                        lastX = this.x-1
                    } else {
                        self.x--
                        document.querySelector(`#row${self.y} #col${self.x}`).style.transform= "rotate(90deg)"
                    }
                    break
                case 'down':
                    if (checkBoundaries(document.querySelector(`#row${self.y + 1} #col${self.x}`))) {
                        lastY = this.y+1
                    } else {                   
                        self.y++
                        document.querySelector(`#row${self.y} #col${self.x}`).style.transform= "rotate(0deg)"                   
                    }
                    break
                case 'right':
                    if (checkBoundaries(document.querySelector(`#row${self.y} #col${self.x + 1}`))) {
                        lastX = this.x+1
                    } else {
                        self.x++
                        document.querySelector(`#row${self.y} #col${self.x}`).style.transform= "rotate(270deg)"
                    }
                    break
                }
                } else {
                    document.querySelector(`#row${self.y} #col${self.x}`)
                
            }
        self.erase(lastY,lastX)
        //this.style()       
        self.drawPlayer()
    }
    this.drawPlayer = function () {
        var playerCell = document.querySelector(`#row${this.y} #col${this.x}`)
        playerCell.classList.add("player")
    }
    this.erase = function (lastY,lastX) {
        var playerCell = document.querySelector(".player")
        playerCell.classList.remove('player')
        document.querySelector(`#row${lastY} #col${lastX}`).style.removeProperty("transform")
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

   /* this.style = function () {
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
    }*/

 

}








export { Player }


