function updateui() {
    document.getElementById("antimatter").innerHTML = 'You have <span class="antimattertextglow">' + short(game.anti) + '</span> Antimatter.'
    document.getElementById("antimatterpersec").innerHTML = 'You are gaining ' + short(game.d[1].amount.mul(game.d[1].mult)) + ' Antimatter per second.'
    document.getElementById("tickspeed").innerHTML = 'Tickspeed: ' + short(game.tickspeed.effect)
    document.getElementById("tickspeedeffect").innerHTML = 'Multiply the tickspeed by ' + short(new Decimal(1.1).add(new Decimal(game.galaxy.effect))) + 'x'

    document.getElementById("tickspeedbuy").innerHTML = 'Cost: ' + short(game.tickspeed.cost)
    if (game.anti.greaterThanOrEqualTo(game.tickspeed.cost)) {
        document.getElementById("tickspeedbuy").className = 'buybuttonenabled'
    }
    else{
        document.getElementById("tickspeedbuy").className = 'buybuttondisabled'
    }

    for (let i of dims) {
        if (game.anti.greaterThanOrEqualTo(game.d[i].cost1)) {
            document.getElementById("1d" + i).className = 'buybuttonenabled'
        }
        else {
            document.getElementById("1d" + i).className = 'buybuttondisabled'
        }
    }

    for (let i of dims) {
        if (game.anti.greaterThanOrEqualTo(game.d[i].cost10)) {
            document.getElementById("10d" + i).className = 'buybuttonenabled'
        }
        else {
            document.getElementById("10d" + i).className = 'buybuttondisabled'
        }
    }

    for (let i of dims) {
        document.getElementById("1d" + i).innerHTML = 'Buy 1. Cost: ' + short(game.d[i].cost1)
    }
    for (let i of dims) {
        document.getElementById("10d" + i).innerHTML = 'Buy Until 10. Cost: ' + short(game.d[i].cost10)
    }

    for (let i of dims) {
        document.getElementById("amountd" + i).innerHTML = short(game.d[i].amount)
    }
    for (let i of dims) {
        document.getElementById("boughtd" + i).innerHTML = short(game.d[i].bought)
    }
    for (let i of dims) {
        document.getElementById("multd" + i).innerHTML = short(game.d[i].mult) + 'x'
    }

    document.getElementById("dimboost").innerHTML = 'Cost: ' + short(game.dimboost.cost) + ' 1st Dimensions Bought'
    if (new Decimal(game.d[1].bought).greaterThanOrEqualTo(game.dimboost.cost)) {
        document.getElementById("dimboost").className = 'buybuttonenabled'
    }
    else{
        document.getElementById("dimboost").className = 'buybuttondisabled'
    }
    document.getElementById("dimboostinfo").innerHTML = 'You have ' + short(game.dimboost.amount) + ' Dimension Boosts, giving +' + short(game.dimboost.effect) + ' to the buy 10 multiplier. <span style="font-size:0.6em">(Resets Antimatter, All Dimensions and Tickspeed)</span>'

    document.getElementById("galaxy").innerHTML = 'Cost: ' + short(game.galaxy.cost) + ' 8th Dimensions Bought'
    if (new Decimal(game.d[8].bought).greaterThanOrEqualTo(game.galaxy.cost)) {
        document.getElementById("galaxy").className = 'buybuttonenabled'
    }
    else{
        document.getElementById("galaxy").className = 'buybuttondisabled'
    }
    document.getElementById("galaxyinfo").innerHTML = 'You have ' + short(game.galaxy.amount) + ' Antimatter Galaxies, giving +' + short(game.galaxy.effect) + ' to the tickspeed multiplier. <span style="font-size:0.6em">(Resets Antimatter, All Dimensions, Tickspeed and Removes 4 Dimensions Boosts)</span>'
}