
let game = {
    tab: "antimatter",
    anti: new Decimal("10"),
    ip: new Decimal(0),
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
    d: [],
    ach: [],
    infupg: [],
    breakinfinity: false,
    version: "0.0.5"
}

const infupgcosts = ['1', '1', '2', '2', '4', '4', '8', '8', '4']

for (i = 1 ; i < 9; i++) {
    game.infupg[i] = {
        bought: false,
        cost: new Decimal(0)
    }
}
game.infupg[9] = {
    cost: new Decimal(0),
    bought: new Decimal(0)
}

const ach = ['1', '2', '3', '4', '5', '6', '7', '8']

for (i = 1 ; i < 9; i++) {
    game.ach[i] = {
        unlocked: false
    }
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
            if (new Decimal(game.d[i].bought).greaterThanOrEqualTo(10)) {
            game.d[i].cost1 = (game.d[i].cost1).tetrate(1.0015)
            }
            game.d[i].cost10 = (new Decimal(game.d[i].cost1).mul(new Decimal(10).sub(new Decimal(game.d[i].bought).div(10).floor().mul(10).sub(new Decimal(game.d[i].bought)).abs())))
            j++
    }
    game.tickspeed.cost = new Decimal(10).pow((new Decimal(game.tickspeed.amount)).add(3))
    if (new Decimal(game.tickspeed.amount).greaterThanOrEqualTo(1)) {
    game.tickspeed.cost = new Decimal(game.tickspeed.cost).tetrate(1.00125)
    }
    game.dimboost.cost = (new Decimal(20).add(new Decimal(20).mul(new Decimal(game.dimboost.amount)))).mul((new Decimal(1).add((new Decimal(game.dimboost.amount)).div(2)))).div(10).floor().mul(10)
    game.galaxy.cost = (new Decimal(20).add(new Decimal(40).mul(new Decimal(game.galaxy.amount)))).mul((new Decimal(1).add((new Decimal(game.galaxy.amount)).div(10)))).div(10).floor().mul(10)
    if (new Decimal(game.dimboost.cost).greaterThanOrEqualTo(300)) {game.dimboost.cost = new Decimal(game.dimboost.cost).pow(1.05).div(10).floor().mul(10)}
    if (game.ach[7].unlocked) {
        game.galaxy.cost = new Decimal(game.galaxy.cost).sub(10)
    }
    if (game.infupg[5].bought) {
        game.galaxy.cost = new Decimal(game.galaxy.cost).sub(9)
    }
    if (game.infupg[6].bought) {
        game.dimboost.cost = new Decimal(game.dimboost.cost).sub(9)
    }
    for (j = 1; j < 10; j++) {
    game.infupg[j].cost = new Decimal(infupgcosts[j - 1])
}
    game.infupg[9].cost = new Decimal(4).pow(new Decimal(game.infupg[9].bought).add(2))
}

function updatemult() {
    game.buy10multi = new Decimal(2)
    game.dimboost.effect = new Decimal(game.dimboost.amount).div(2)
    if (game.infupg[3].bought) {
        game.dimboost.effect = new Decimal(game.dimboost.effect).mul(2)
    }
    game.buy10multi = new Decimal(game.buy10multi).add(new Decimal(game.dimboost.effect))
    for (let i of dims) {
        game.d[i].mult = (new Decimal(game.buy10multi).pow(new Decimal(game.d[i].bought).div(10).floor()))
    }
    game.galaxy.effect = (new Decimal(game.galaxy.amount)).div(20)
    if (game.infupg[3].bought) {
        game.galaxy.effect = new Decimal(game.galaxy.effect).mul(2)
    }
    game.tickspeed.effect = (new Decimal(1.1).add(new Decimal(game.galaxy.effect))).pow(new Decimal(game.tickspeed.amount))
    if (game.infupg[1].bought) {
        game.d[1].mult = new Decimal(game.d[1].mult).mul(new Decimal(game.d[8].mult).tetrate(0.1))
    }
    if (game.infupg[2].bought) {
        game.d[8].mult = new Decimal(game.d[8].mult).mul(new Decimal(game.d[1].mult).tetrate(0.5))
    }
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
        }
        game.dimboost.amount = new Decimal(game.dimboost.amount).add(1)
        checkachievements()
        game.tickspeed.amount = new Decimal(0)
        game.anti = new Decimal(110)
        if (game.ach[3].unlocked) {
            game.anti = new Decimal(game.anti).add(new Decimal(1000))
        }
        if (game.ach[4].unlocked) {
            game.anti = new Decimal(game.anti).add(new Decimal(1e5))
        }
        if (game.ach[5].unlocked) {
            game.tickspeed.amount = new Decimal(10)
        }
        if (game.ach[6].unlocked) {
            game.anti = new Decimal(game.anti).add(new Decimal(1e10))
        }
    }
}

function buygalaxy() {
    if (new Decimal(game.d[8].bought).greaterThanOrEqualTo(game.galaxy.cost)) {
        for (let i = 1; i < 9; i++) {
            game.d[i].amount = new Decimal(0)
            game.d[i].bought = new Decimal(0)
        }
        game.galaxy.amount = new Decimal(game.galaxy.amount).add(1)
        checkachievements()
        game.tickspeed.amount = new Decimal(0)
        game.anti = new Decimal(110)
        if (game.ach[3].unlocked) {
            game.anti = new Decimal(game.anti).add(new Decimal(1000))
        }
        if (game.ach[4].unlocked) {
            game.anti = new Decimal(game.anti).add(new Decimal(1e5))
        }
        if (game.ach[5].unlocked) {
            game.tickspeed.amount = new Decimal(10)
        }
        if (game.ach[6].unlocked) {
            game.anti = new Decimal(game.anti).add(new Decimal(1000000))
        }
        game.dimboost.amount = new Decimal(game.dimboost.amount).sub(4).max(0)
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
    if (num.greaterThanOrEqualTo("1.79e308")) {
    if (game.breakinfinity == false) {
        num = "infinite"
        return num
    }
}
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

function checkachievements() {
    if (new Decimal(game.d[1].bought).greaterThanOrEqualTo(1) && game.ach[1].unlocked == false) {
        game.ach[1].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.dimboost.amount).greaterThanOrEqualTo(1) && game.ach[2].unlocked == false) {
        game.ach[2].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.dimboost.amount).greaterThanOrEqualTo(2) && game.ach[3].unlocked == false) {
        game.ach[3].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.dimboost.amount).greaterThanOrEqualTo(4) && game.ach[4].unlocked == false) {
        game.ach[4].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.galaxy.amount).greaterThanOrEqualTo(1) && game.ach[5].unlocked == false) {
        game.ach[5].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.galaxy.amount).greaterThanOrEqualTo(2) && game.ach[6].unlocked == false) {
        game.ach[6].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.galaxy.amount).greaterThanOrEqualTo(3) && game.ach[7].unlocked == false) {
        game.ach[7].unlocked = true
        game.hasunseenachievement = true
    }
    if (new Decimal(game.ip).greaterThanOrEqualTo("1") && game.ach[8].unlocked == false) {
        game.ach[8].unlocked = true
        game.hasunseenachievement = true
    }
}

function checkcrunch() {
    if (game.anti.greaterThanOrEqualTo("1.79e308") && game.breakinfinity == false) {
        game.tab = "bigcrunch"
    }
}

function crunch() {
    game.ip = new Decimal(game.ip).add(new Decimal(1).mul(new Decimal(2).pow(new Decimal(game.infupg[9].bought))))
    for (let i = 1; i < 9; i++) {
        game.d[i].amount = new Decimal(0)
        game.d[i].bought = new Decimal(0)
    }
    game.galaxy.amount = new Decimal(0)
    game.dimboost.amount = new Decimal(0)
    game.anti = new Decimal(110)
    if (game.ach[3].unlocked) {
        game.anti = new Decimal(game.anti).add(new Decimal(1e3))
    }
    if (game.ach[5].unlocked) {
        game.tickspeed.amount = new Decimal(10)
    }
    if (game.ach[4].unlocked) {
        game.anti = new Decimal(game.anti).add(new Decimal(1e5))
    }
    if (game.ach[6].unlocked) {
        game.anti = new Decimal(game.anti).add(new Decimal(1e10))
    }
    if (game.infupg[7].bought) {
        game.galaxy.amount = new Decimal(game.galaxy.amount).add(1)
    }
    if (game.infupg[8].bought) {
        game.dimboost.amount = new Decimal(game.dimboost.amount).add(4)
    }
    game.tab = "antimatter"
}

function buyinfupg(upg) {
    if (new Decimal(game.ip).greaterThanOrEqualTo(new Decimal(game.infupg[upg].cost))) {
        game.ip = new Decimal(game.ip).sub(new Decimal(game.infupg[upg].cost))
        game.infupg[upg].bought = true
    }
}

function buyinfupg9() {
    if (new Decimal(game.ip).greaterThanOrEqualTo(new Decimal(game.infupg[9].cost))) {
        game.ip = new Decimal(game.ip).sub(new Decimal(game.infupg[9].cost))
        game.infupg[9].bought = new Decimal(game.infupg[9].bought).add(1)
    }
}

function tick() {
    updatecosts()
    updatemult()
    generate()
    checkachievements()
    checkcrunch()
    updateui()
}

function save() {
    localStorage.setItem('game', JSON.stringify(game))
}

if (localStorage.length !== 0) {
    game = JSON.parse(localStorage.getItem('game'))
}

setInterval(() => {
    tick()
}, 1000/60);

setInterval(() => {
    save()
}, 1000);