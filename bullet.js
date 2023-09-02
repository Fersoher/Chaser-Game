function Bullet(player) {
    this.y = null
    this.x = null
    this.direction = player.direction
    var self = this
    this.timerId
    this.cells = []

    this.createShoot = function (player) {
        this.y= player.y
        this.x = player.x
        switch (this.direction) {
            case 'up':
               this.y= player.y-1
               var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
               for(this.y ; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.y--){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
               }
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
        setTimeout(this.erase,200)



    }
    this.erase = function () {
        self.cells.forEach(element => {element.classList.remove("bullet")})
        this.cells=[]
    }
    
}

export { Bullet }