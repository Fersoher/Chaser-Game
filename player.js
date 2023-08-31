function Player (x, y) {
    this.x = x
    this.y = y



    this.drawPlayer = function() {
        var playerCell = document.querySelector(`#row${this.y} #col${this.x}`)
        playerCell.classList.add("player")

    }

}















export { Player }



