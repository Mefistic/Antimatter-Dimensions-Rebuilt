let achievementinfo = [0, 'Antimatter<br><br>Get Your First Dimension.<br>Effect: No Effect.', 'Boosting<br><br>Get Your First Dimension Boost.<br>Effect: Start With 100 Antimatter.', 'Boosting More<br><br>Get 4 Dimension Boosts.<br>Effect: Start With 1.00e5 Antimatter.', 'Boosting a Lot<br><br>Get 8 Dimension Boosts.<br>Effect: Permanent +1.00 Buy 10 Multiplier', 'Galactical<br><br>Get an Antimatter Galaxy.<br>Effect: You start with 10 Tickspeed Upgrades.', 'Supergalactical<br><br>Get 2 Antimatter Galaxies<br>Effect: Start With 1.00e10 Antimatter.', 'Hypergalactical<br><br>Get 3 Antimatter Galaxies<br>Effect: Galaxies Are 10 Dimensions Cheaper.', 'Infinity<br><br>Reach ' + short(1.79e308) + ' Antimatter.<br>Effect: 10x Multiplier on All Dimensions.']

function updateui() {
    document.getElementById("antimattertab").style = "display: none;"
    document.getElementById("achievementstab").style = "display: none;"
    if (game.tab == "antimatter") {
        
        document.getElementById("antimattertab").style = "display: box;"

        document.getElementById("antimatter").innerHTML = 'You have <span class="antimattertextglow">' + short(game.anti) + '</span> Antimatter.'
        document.getElementById("antimatterpersec").innerHTML = 'You are gaining ' + short(game.d[1].amount.mul(game.d[1].mult).mul(game.tickspeed.effect)) + ' Antimatter per second.'
        document.getElementById("buy10multi").innerHTML = 'Buy 10 Multiplier: ' + short(game.buy10multi) + 'x'
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
        document.getElementById("dimboostinfo").innerHTML = 'You have ' + short(game.dimboost.amount) + ' Dimension Boosts, adding +' + short(new Decimal(game.dimboost.amount).div(2)) + ' to the buy 10 multiplier. <span style="font-size:0.6em">(Resets Antimatter, All Dimensions and Tickspeed)</span>'

        document.getElementById("galaxy").innerHTML = 'Cost: ' + short(game.galaxy.cost) + ' 8th Dimensions Bought'
        if (new Decimal(game.d[8].bought).greaterThanOrEqualTo(game.galaxy.cost)) {
            document.getElementById("galaxy").className = 'buybuttonenabled'
        }
        else{
            document.getElementById("galaxy").className = 'buybuttondisabled'
        }
        document.getElementById("galaxyinfo").innerHTML = 'You have ' + short(game.galaxy.amount) + ' Antimatter Galaxies, adding +' + short(game.galaxy.effect) + ' to the tickspeed multiplier. <span style="font-size:0.6em">(Resets Antimatter, All Dimensions, Tickspeed and Removes 4 Dimensions Boosts)</span>'
    }
    if (game.tab == "achievements") {
        document.getElementById("achievementstab").style = "display: box;"
        for (let i of ach) {
            if (game.ach[i].unlocked == true) {
                document.getElementById("ach" + i).style = "width: 5em; height: 5em; box-shadow: 0 0 1em rgb(32, 255, 32)"
            }
            else {
                document.getElementById("ach" + i).style = "width: 5em; height: 5em; box-shadow: 0 0 1em rgb(255, 32, 32)"
            }
        }
    }
    document.getElementById("navcontainer").style = "display: box;"
    if (game.hasunseenachievement) {
        document.getElementById("achievementsbutton").style = "background-color: rgb(64, 255, 255); border-color: rgb(64, 255, 255); color: black;"
    }
    else {
        document.getElementById("achievementsbutton").style = "display: box"
    }
}