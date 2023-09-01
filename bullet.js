

function Bullet(player) {
    this.y = null
    this.x = null
    this.direction = player.direction
    var self = this
    this.timerId
    
    this.createShoot = function (player) {

        switch (this.direction) {
            case 'up':
                var bulletCell = document.querySelector(`#row${player.y - 1} #col${player.x}`)
                bulletCell.classList.add("bullet")
                this.y= player.y - 1
                this.x = player.x
                break
            case 'left':
                var bulletCell = document.querySelector(`#row${player.y} #col${player.x - 1}`)
                bulletCell.classList.add("bullet")
                this.y = player.y
                this.x = player.x -1
                break
            case 'down':
                var bulletCell = document.querySelector(`#row${player.y + 1} #col${player.x}`)
                bulletCell.classList.add("bullet")
                this.y = player.y + 1
                this.x = player.x
                break
            case 'right':
                var bulletCell = document.querySelector(`#row${player.y} #col${player.x + 1}`)
                bulletCell.classList.add("bullet")
                this.y = player.y 
                this.x = player.x + 1
                break
        }
        this.timerId = setInterval(self.erase, 500)
        
        
    }
    this.erase = function () {    
        var bulletCell = document.querySelector(`#row${self.y} #col${self.x}`)
        bulletCell.classList.remove("bullet")
        console.log("hello there")
    }
}

export { Bullet }
