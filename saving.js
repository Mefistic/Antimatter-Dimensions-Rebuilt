function save() {
    localStorage.setItem('game', JSON.stringify(game))
}

if (localStorage.length !== 0) {
    game = JSON.parse(localStorage.getItem('game'))
}

if (game.d == null || game.d == undefined) {
    localStorage.clear()
    window.reload()
}