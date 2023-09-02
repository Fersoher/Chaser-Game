function Bullet(player, enemy) {
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
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall') && !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('enemy'); this.y--) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    console.log("pium")
                }
                if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('enemy')) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    console.log("enemy hit")
                    enemy.alive = false
                    console.log(enemy.health)
                }
                break
            case 'left':
                this.x = player.x - 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.x--) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                }
                break
            case 'down':
                this.y = player.y + 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.y++) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                }
                break
            case 'right':
                this.x = player.x + 1
                var bulletCell = document.querySelector(`#row${this.y} #col${this.x}`)
                for (this.y; !document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall'); this.x++) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bullet")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
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
export { Bullet }