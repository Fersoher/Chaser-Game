function Bullet(player) {
    this.y = null
    this.x = null
    this.direction = player.direction
    var self = this
    this.timerId
    this.cells = []

    this.createShoot = function () {
        this.x = player.x
        this.y = player.y
        switch (this.direction) {
            case 'up':
                this.y = player.y - 1
                console.log(this.y, this.x)
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                console.log(bulletCell)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.y--) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletVer")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    console.log("pium")
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('enemy')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletVer")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("enemy hit")
                    }
                }
                
                break
            case 'left':
                this.x = player.x - 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.x--) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletHor")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('enemy')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletHor")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("enemy hit")
                        
                    }
                }
                
                break
            case 'down':
                this.y = player.y + 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.y++) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletVer")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('enemy')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletVer")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("enemy hit")
                       
                    }
                }
                break
            case 'right':
                this.x = player.x + 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.x++) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletHor")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('enemy')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletHor")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("enemy hit")
                        
                    }
                }
                break
        }
        setTimeout(this.erase, 200)
    }
    this.erase = function () {
        self.cells.forEach(element => { element.classList.remove("bulletVer") })
        self.cells.forEach(element => { element.classList.remove("bulletHor") })
        this.cells = []
    }

}
export { Bullet }