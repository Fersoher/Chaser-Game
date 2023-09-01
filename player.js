function Player(x, y) {
    this.x = x
    this.y = y
    this.direction = ''
    var self = this


    this.movePlayer = function () {
        
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
                return self.checkBoundaries(
                    document.querySelector(`#row${y} #col${x}`)
                );
            case "a":
                self.y;
                self.x - 1;
                return self.checkBoundaries(
                    document.querySelector(`#row${y} #col${x}`)
                );
            case "s":
                self.y + 1;
                self.x;
                return self.checkBoundaries(
                    document.querySelector(`#row${y} #col${x}`)
                );
            case "d":
                self.y;
                self.x + 1;
                return self.checkBoundaries(
                    document.querySelector(`#row${y} #col${x}`)
                );
        }
    }
    function checkBoundaries(cell) {
        const boundaries = ["wall", "enemy", "player"];
        return boundaries.includes(cell.getAttribute("class"));
    }
    
    window.addEventListener('keydown', function (e) {
            console.log(e.key)
            if (e.key == 'w') {
                self.y--;
                self.erase()
                self.drawPlayer();
            }
            if (e.key == 'a') {
                self.x--;
                self.erase()
                self.drawPlayer();
            }
            if (e.key == 's') {
                self.y++;
                self.erase()
                self.drawPlayer();
            }
            if (e.key == 'd') {
                self.x++;
                self.erase()
                self.drawPlayer();
            }

            

        })

}















export { Player }



