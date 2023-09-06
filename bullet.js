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
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletVer")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    this.y--
                }
                break

            case 'left':
                this.x = player.x - 1
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')) {
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletHor")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    this.x--
                }
                break

            case 'down':
                this.y = player.y + 1
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletVer")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    this.y++

                }
                break

            case 'right':
                this.x = player.x + 1
                while(!document.querySelector(`#row${this.y} #col${this.x}`).classList.contains('wall')){
                    document.querySelector(`#row${this.y} #col${this.x}`).classList.add("bulletHor")
                    this.cells.push(document.querySelector(`#row${this.y} #col${this.x}`))
                    this.x++
                }
                break

        }
        setTimeout(this.erase, 200)
    }
    
    this.erase = function () {
        self.cells.forEach(function (element) { element.classList.remove("bulletVer") })
        self.cells.forEach(function (element) { element.classList.remove("bulletHor") })
        this.cells = []
    }

}
export { Bullet }