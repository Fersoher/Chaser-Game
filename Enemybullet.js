function Enemybullet(player, enemy) {
    
    this.y = null
    this.x = null
    this.direction = enemy.direction
    var self = this
    this.timerId
    this.cells = []

    this.createShoot = function () {
        this.x = enemy.x
        this.y = enemy.y
        switch (this.direction) {
            case 'upenemy':
                this.y = enemy.y - 1
                console.log(this.y, this.x)
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                console.log(bulletCell)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.y--) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    console.log("pium")
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("player hit")
                        player.alive = false
                        console.log(player.alive)
                    }
                
                }
                
                break
            case 'leftenemy':
                this.x = enemy.x - 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.x--) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("player hit")
                        player.alive = false
                        console.log(player.health)
                    }
                }
                
                break
            case 'downenemy':
                this.y = enemy.y + 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.y++) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("player hit")
                        player.alive = false
                        console.log(player.health)
                    }
                }
                break
            case 'rightenemy':
                this.x = enemy.x + 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.x++) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                        this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                        console.log("player hit")
                        player.alive = false
                        console.log(player.health)
                    }
                }
                break
        }
        setTimeout(this.erase, 200)
    }
    this.erase = function () {
        self.cells.forEach(element => { element.classList.remove("bullet") })
        this.cells = []
    }

}
export { Enemybullet }