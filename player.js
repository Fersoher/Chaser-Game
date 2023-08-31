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



