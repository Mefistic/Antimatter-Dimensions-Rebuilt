
let game = {
    tab: "antimatter",
    anti: new Decimal("10"),
    tickspeed: {
        amount: new Decimal(0),
        cost: new Decimal(0),
        effect: new Decimal(0)
    },
    dimboost: {
        amount: new Decimal(0),
        cost: new Decimal(0),
        effect: new Decimal(0)
    },
    galaxy: {
        amount: new Decimal(0),
        cost: new Decimal(0),
        effect: new Decimal(0)
    },
    d: []
}

const dims = ['1', '2', '3', '4', '5', '6', '7', '8']

for (let i of dims) {
    game.d[i] = {
        amount: new Decimal(0),
        bought: new Decimal(0),
        cost1: new Decimal(0),
        cost10: new Decimal(0),
        costscale: new Decimal(0),
        mult: new Decimal(0)
    }
}

const dimcostscaling = ['1e3', '1e4', '1e5', '1e6', '1e7', '1e8', '1e9', '1e10']

let j = 0
for (let i of dims) {
    game.d[i].costscale = new Decimal(dimcostscaling[j])
    j++
}

const dimbasecosts = ['10', '1e2', '1e4', '1e9', '1e11', '1e14', '1e17', '1e24']

function updatecosts() {
    let j = 0
    for (let i of dims) {
            game.d[i].cost1 = (new Decimal(dimbasecosts[j]).mul(new Decimal(game.d[i].costscale).pow(new Decimal(game.d[i].bought).div(10).floor())))
            if (new Decimal(game.d[i].bought).greaterThanOrEqualTo(100)) {
                game.d[i].cost1 = new Decimal(game.d[i].cost1).mul(new Decimal(10).pow((game.d[i].bought.sub(100))))
            }
            game.d[i].cost10 = (new Decimal(game.d[i].cost1).mul(new Decimal(10).sub(new Decimal(game.d[i].bought).div(10).floor().mul(10).sub(new Decimal(game.d[i].bought)).abs())))
            j++
    }
    game.tickspeed.cost = (new Decimal(10).pow((new Decimal(game.tickspeed.amount)).add(3)))
    if (new Decimal(game.tickspeed.amount).greaterThanOrEqualTo(50)) {
        game.tickspeed.cost = new Decimal(game.tickspeed.cost).mul(new Decimal(10).pow((game.tickspeed.amount.sub(50))))
    }
    game.dimboost.cost = (new Decimal(20).add(new Decimal(20).mul(new Decimal(game.dimboost.amount)))).mul((new Decimal(1).add((new Decimal(game.dimboost.amount)).div(40)))).div(10).floor().mul(10)
    game.galaxy.cost = (new Decimal(40).add(new Decimal(40).mul(new Decimal(game.galaxy.amount)))).mul((new Decimal(1).add((new Decimal(game.galaxy.amount)).div(5)))).div(10).floor().mul(10)
}

function updatemult() {
    game.dimboost.effect = new Decimal(game.dimboost.amount).div(2)
    for (let i of dims) {
        game.d[i].mult = (new Decimal(2).add(new Decimal(game.dimboost.effect))).pow(new Decimal(game.d[i].bought).div(10).floor())
    }
    game.galaxy.effect = (new Decimal(game.galaxy.amount)).div(20)
    game.tickspeed.effect = (new Decimal(1.1).add(new Decimal(game.galaxy.effect))).pow(new Decimal(game.tickspeed.amount))
}

function generate() {
    for (let i = 1; i < 8; i++) {
        game.d[i].amount = new Decimal(game.d[i].amount).add((new Decimal(game.d[i + 1].amount)).mul(new Decimal(game.d[i+1].mult)).mul(game.tickspeed.effect).div(60))
    }
    game.anti = new Decimal(game.anti).add((new Decimal(game.d[1].amount)).mul(new Decimal(game.d[1].mult)).mul(game.tickspeed.effect).div(60))
}

function buy(amount, dim) {
    if (amount == 1) {
        if (game.anti.greaterThanOrEqualTo(game.d[dim].cost1)) {
            game.anti = game.anti.sub(game.d[dim].cost1)
            game.d[dim].amount = new Decimal(game.d[dim].amount).add(1)
            game.d[dim].bought = new Decimal(game.d[dim].bought).add(1)
        }
    }
    if (amount == 10) {
        if (game.anti.greaterThanOrEqualTo(game.d[dim].cost10)) {
            game.anti = game.anti.sub(game.d[dim].cost10)
            game.d[dim].amount = new Decimal(game.d[dim].amount).add(new Decimal(10).sub(new Decimal(game.d[dim].bought).div(10).floor().mul(10).sub(new Decimal(game.d[dim].bought)).abs()))
            game.d[dim].bought = new Decimal(game.d[dim].bought).add(new Decimal(10).sub(new Decimal(game.d[dim].bought).div(10).floor().mul(10).sub(new Decimal(game.d[dim].bought)).abs()))
        }
    }
}

function dimboost() {
    if (new Decimal(game.d[1].bought).greaterThanOrEqualTo(game.dimboost.cost)) {
        for (let i = 1; i < 9; i++) {
            game.d[i].amount = new Decimal(0)
            game.d[i].bought = new Decimal(0)
            game.tickspeed.amount = new Decimal(0)
            game.anti = new Decimal(100)
        }
        game.dimboost.amount = new Decimal(game.dimboost.amount).add(1)
    }
}

function buygalaxy() {
    if (new Decimal(game.d[8].bought).greaterThanOrEqualTo(game.galaxy.cost)) {
        for (let i = 1; i < 9; i++) {
            game.d[i].amount = new Decimal(0)
            game.d[i].bought = new Decimal(0)
        }
        game.tickspeed.amount = new Decimal(0)
        game.anti = new Decimal(1e5)
        game.dimboost.amount = new Decimal(game.dimboost.amount).sub(4).max(0)
        game.galaxy.amount = new Decimal(game.galaxy.amount).add(1)
    }
}

function buytickspeed() {
    if (game.anti.greaterThanOrEqualTo(game.tickspeed.cost)) {
        game.anti = game.anti.sub(game.tickspeed.cost)
        game.tickspeed.amount = new Decimal(game.tickspeed.amount).add(1)
    }
}

function short(num) {
    num = new Decimal(num)
    num = num.mul(1.0000001)
    if (num.greaterThanOrEqualTo("e1.797e308")) {
        num = "eee" + num.mag.toFixed(5)
        return num
    }
    if (num.e >= 1e6) {
        e = new Decimal(num.e)
        ee = new Decimal(e).log10()
        num = "ee" + ee.toFixed(5)
        return num
    }
    if (num.greaterThanOrEqualTo("1000")) {
        num = num.m.toFixed(2) + "e" + num.e
        return num
    }
    else {
        num = num.toFixed(2);
        return num
    }
}

function buymax() {
    for (i = 100; i > 0; i--) {
    for (l = 8; l > 0; l--) {
        buy(10, l)
    }
    buytickspeed()
    updatecosts()
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'm') {
        buymax()
    }
})

function tick() {
    updatecosts()
    updatemult()
    generate()
    updateui()
}

setInterval(() => {
    tick()
}, 1000/60);

function save() {
    localStorage.setItem('game', JSON.stringify(game))
}

if (localStorage.length !== 0) {
    game = JSON.parse(localStorage.getItem('game'))
}

setInterval(() => {
    save()
}, 1000);