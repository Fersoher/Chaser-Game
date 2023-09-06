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
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletEnemyVer")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        player.alive = false
                    }
                    this.y--
                }
                break

            case 'leftenemy':
                this.x = enemy.x - 1
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletEnemyHor")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        player.alive = false
                    }
                    this.x--
                }
                break

            case 'downenemy':
                this.y = enemy.y + 1
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletEnemyVer")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        player.alive = false
                    }
                    this.y++
                } 
                break

            case 'rightenemy':
                this.x = enemy.x + 1
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletEnemyHor")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    if (document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('player')) {
                        player.alive = false
                    }
                    this.x++
                }
                break
                
        }
        setTimeout(this.erase, 200)
    }
    this.erase = function () {
        self.cells.forEach(element => { element.classList.remove("bulletEnemyHor") })
        self.cells.forEach(element => { element.classList.remove("bulletEnemyVer") })
        this.cells = []
    }

}
export { Enemybullet }