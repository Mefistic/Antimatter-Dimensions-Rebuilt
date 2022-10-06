// this is my first time coding please dont cry

let antimatter = new Decimal(1);
//dim
let dim1 = new Decimal(0);
let dim2 = new Decimal(0);
let dim3 = new Decimal(0);
let dim4 = new Decimal(0);
let dim5 = new Decimal(0);
let dim6 = new Decimal(0);
let dim7 = new Decimal(0);
let dim8 = new Decimal(0);
//bought
let dim1Bought = new Decimal(0);
let dim2Bought = new Decimal(0);
let dim3Bought = new Decimal(0);
let dim4Bought = new Decimal(0);
let dim5Bought = new Decimal(0);
let dim6Bought = new Decimal(0);
let dim7Bought = new Decimal(0);
let dim8Bought = new Decimal(0);
let tsBought = new Decimal(0);
let dimBoostBought = new Decimal(0);
let galaxyBought = new Decimal(0);
//cost
let dim1Cost = new Decimal(0);
let dim2Cost = new Decimal(0);
let dim3Cost = new Decimal(0);
let dim4Cost = new Decimal(0);
let dim5Cost = new Decimal(0);
let dim6Cost = new Decimal(0);
let dim7Cost = new Decimal(0);
let dim8Cost = new Decimal(0);
let tsCost = new Decimal(0);
let dimBoostCost = new Decimal(0);
//mult
let dim1Mult = new Decimal(0);
let dim2Mult = new Decimal(0);
let dim3Mult = new Decimal(0);
let dim4Mult = new Decimal(0);
let dim5Mult = new Decimal(0);
let dim6Mult = new Decimal(0);
let dim7Mult = new Decimal(0);
let dim8Mult = new Decimal(0);
let tsMult = new Decimal(0);
let dimBoostMult = new Decimal(0);
let galaxyMult = new Decimal(0);
let developer = new Decimal(1);

function sci(num) {
    if (num.layer == 0) {
        if (num.mag >= 1000) {
            num = num.m.toFixed(2) + "e" + num.e;
        }
        else {
            num = num.toFixed(2)
        }
    }
    if (num.layer == 1) {
        num = num.mantissaWithDecimalPlaces(2) + "e" + num.e;
        }
    return num.toString();
}

function buyTickspeed() {
    if (antimatter.greaterThanOrEqualTo(tsCost)) {
        tsBought = tsBought.add(1);
        antimatter = antimatter.sub(tsCost);
    }
}
function buyDim1() {

    if (antimatter.greaterThanOrEqualTo(dim1Cost)) {
        dim1 = dim1.add(1);
        dim1Bought = dim1Bought.add(1);
        antimatter = antimatter.sub(dim1Cost);
    }
}

function buyDim2() {

    if (antimatter.greaterThanOrEqualTo(dim2Cost)) {
        dim2 = dim2.add(1);
        dim2Bought = dim2Bought.add(1);
        antimatter = antimatter.sub(dim2Cost);
    }
}

function buyDim3() {

    if (antimatter.greaterThanOrEqualTo(dim3Cost)) {
        dim3 = dim3.add(1);
        dim3Bought = dim3Bought.add(1);
        antimatter = antimatter.sub(dim3Cost);
    }
}

function buyDim4() {

    if (antimatter.greaterThanOrEqualTo(dim4Cost)) {
        dim4 = dim4.add(1);
        dim4Bought = dim4Bought.add(1);
        antimatter = antimatter.sub(dim4Cost);
    }
}

function buyDim5() {

    if (antimatter.greaterThanOrEqualTo(dim5Cost)) {
        dim5 = dim5.add(1);
        dim5Bought = dim5Bought.add(1);
        antimatter = antimatter.sub(dim5Cost);
    }
}

function buyDim6() {

    if (antimatter.greaterThanOrEqualTo(dim6Cost)) {
        dim6 = dim6.add(1);
        dim6Bought = dim6Bought.add(1);
        antimatter = antimatter.sub(dim6Cost);
    }
}

function buyDim7() {

    if (antimatter.greaterThanOrEqualTo(dim7Cost)) {
        dim7 = dim7.add(1);
        dim7Bought = dim7Bought.add(1);
        antimatter = antimatter.sub(dim7Cost);
    }
}

function buyDim8() {

    if (antimatter.greaterThanOrEqualTo(dim8Cost)) {
        dim8 = dim8.add(1);
        dim8Bought = dim8Bought.add(1);
        antimatter = antimatter.sub(dim8Cost);
    }
}

function buyDimboost() {

    if (antimatter.greaterThanOrEqualTo(dimBoostCost)) {
        dimBoostBought = dimBoostBought.add(1);
        antimatter = new Decimal(1);
        dim1 = new Decimal(0);
        dim2 = new Decimal(0);
        dim3 = new Decimal(0);
        dim4 = new Decimal(0);
        dim5 = new Decimal(0);
        dim6 = new Decimal(0);
        dim7 = new Decimal(0);
        dim8 = new Decimal(0);
        dim1Bought = new Decimal(0);
        dim2Bought = new Decimal(0);
        dim3Bought = new Decimal(0);
        dim4Bought = new Decimal(0);
        dim5Bought = new Decimal(0);
        dim6Bought = new Decimal(0);
        dim7Bought = new Decimal(0);
        dim8Bought = new Decimal(0);
        tsBought = new Decimal(0);
    }
}

function buyGalaxy() {

    if (antimatter.greaterThanOrEqualTo(galaxyCost)) {
        dimBoostBought = new Decimal(0)
        antimatter = new Decimal(1);
        dim1 = new Decimal(0);
        dim2 = new Decimal(0);
        dim3 = new Decimal(0);
        dim4 = new Decimal(0);
        dim5 = new Decimal(0);
        dim6 = new Decimal(0);
        dim7 = new Decimal(0);
        dim8 = new Decimal(0);
        dim1Bought = new Decimal(0);
        dim2Bought = new Decimal(0);
        dim3Bought = new Decimal(0);
        dim4Bought = new Decimal(0);
        dim5Bought = new Decimal(0);
        dim6Bought = new Decimal(0);
        dim7Bought = new Decimal(0);
        dim8Bought = new Decimal(0);
        tsBought = new Decimal(0);
        galaxyBought = galaxyBought.add(1)
    }
}

function buyMax() {
    for (let i = 0; i < 10; i++) {
        buyTickspeed();
        buyDim8();
        buyDim7();
        buyDim6();
        buyDim5();
        buyDim4();
        buyDim3();
        buyDim2();
        buyDim1();
    }
}

addEventListener("keydown", function(e) {
    var c = e.keyCode;
    if (c == 77) {
        buyMax();
    }
})

// save system

if (localStorage.length !== 0) {
    antimatter = new Decimal(localStorage.antimatter);
    dim1 = new Decimal(localStorage.dim1);
    dim2 = new Decimal(localStorage.dim2);
    dim3 = new Decimal(localStorage.dim3);
    dim4 = new Decimal(localStorage.dim4);
    dim5 = new Decimal(localStorage.dim5);
    dim6 = new Decimal(localStorage.dim6);
    dim7 = new Decimal(localStorage.dim7);
    dim8 = new Decimal(localStorage.dim8);
    dim1Bought = new Decimal(localStorage.dim1Bought);
    dim2Bought = new Decimal(localStorage.dim2Bought);
    dim3Bought = new Decimal(localStorage.dim3Bought);
    dim4Bought = new Decimal(localStorage.dim4Bought);
    dim5Bought = new Decimal(localStorage.dim5Bought);
    dim6Bought = new Decimal(localStorage.dim6Bought);
    dim7Bought = new Decimal(localStorage.dim7Bought);
    dim8Bought = new Decimal(localStorage.dim8Bought);
    tsBought = new Decimal(localStorage.tsBought);
    dimBoostBought = new Decimal(localStorage.dimBoostBought);
    galaxyBought = new Decimal(localStorage.galaxyBought);
}

function gameTick() {

    // costs

    tsCost = new Decimal(10).pow(tsBought.add(3));
    dim1Cost = new Decimal("1e2").pow(dim1Bought);
    dim2Cost = new Decimal("1e3").pow(dim2Bought.add(1));
    dim3Cost = new Decimal("1e4").pow(dim3Bought.add(1));
    dim4Cost = new Decimal("1e5").pow(dim4Bought.add(1));
    dim5Cost = new Decimal("1e6").pow(dim5Bought.add(1));
    dim6Cost = new Decimal("1e7").pow(dim6Bought.add(1));
    dim7Cost = new Decimal("1e8").pow(dim7Bought.add(1));
    dim8Cost = new Decimal("1e9").pow(dim8Bought.add(1));
    dimBoostCost = new Decimal("1e25").pow(dimBoostBought.add(1));
    galaxyCost = new Decimal("1e125").pow(galaxyBought.add(1));

    if(tsCost.greaterThanOrEqualTo("1.79e308")){
        tsCost = tsCost.div("1e150").pow(2);
    }
    if(dim1Cost.greaterThanOrEqualTo("1.79e308")){
        dim1Cost = dim1Cost.div("1e150").pow(2);
    }
    if(dim2Cost.greaterThanOrEqualTo("1.79e308")){
        dim2Cost = dim2Cost.div("1e150").pow(2);
    }
    if(dim3Cost.greaterThanOrEqualTo("1.79e308")){
        dim3Cost = dim3Cost.div("1e150").pow(2);
    }
    if(dim4Cost.greaterThanOrEqualTo("1.79e308")){
        dim4Cost = dim4Cost.div("1e150").pow(2);
    }
    if(dim5Cost.greaterThanOrEqualTo("1.79e308")){
        dim5Cost = dim5Cost.div("1e150").pow(2);
    }
    if(dim6Cost.greaterThanOrEqualTo("1.79e308")){
        dim6Cost = dim6Cost.div("1e150").pow(2);
    }
    if(dim7Cost.greaterThanOrEqualTo("1.79e308")){
        dim7Cost = dim7Cost.div("1e150").pow(2);
    }
    if(dim8Cost.greaterThanOrEqualTo("1.79e308")){
        dim8Cost = dim8Cost.div("1e150").pow(2);
    }
    if(dimBoostCost.greaterThanOrEqualTo("1.79e308")){
        dimBoostCost = dimBoostCost.div("1e150").pow(2);
    }
    if(galaxyCost.greaterThanOrEqualTo("1.79e308")){
        galaxyCost = galaxyCost.div("1e150").pow(2);
    }

    // multipliers

    dimBoostMult = new Decimal(2).pow(dimBoostBought);
    dim1Mult = new Decimal(2).pow(dim1Bought.sub(1));
    dim2Mult = new Decimal(2).pow(dim2Bought.sub(1));
    dim3Mult = new Decimal(2).pow(dim3Bought.sub(1));
    dim4Mult = new Decimal(2).pow(dim4Bought.sub(1));
    dim5Mult = new Decimal(2).pow(dim5Bought.sub(1));
    dim6Mult = new Decimal(2).pow(dim6Bought.sub(1));
    dim7Mult = new Decimal(2).pow(dim7Bought.sub(1));
    dim8Mult = new Decimal(2).pow(dim8Bought.sub(1));
    tsMult = new Decimal(1.1).pow(tsBought);
    galaxyMult = new Decimal(1).add(galaxyBought.div(10))
    tsMult = tsMult.pow(galaxyMult);
    if(galaxyMult.lessThan(1)){
        galaxyMult = new Decimal(1)
    }
    if(tsMult.lessThan(1)){
        tsMult = new Decimal(1)
    }
    if(dim1Mult.lessThan(1)){
        dim1Mult = new Decimal(1)
    }
    if(dim2Mult.lessThan(1)){
        dim2Mult = new Decimal(1)
    }
    if(dim3Mult.lessThan(1)){
        dim3Mult = new Decimal(1)
    }
    if(dim4Mult.lessThan(1)){
        dim4Mult = new Decimal(1)
    }
    if(dim5Mult.lessThan(1)){
        dim5Mult = new Decimal(1)
    }
    if(dim6Mult.lessThan(1)){
        dim6Mult = new Decimal(1)
    }
    if(dim7Mult.lessThan(1)){
        dim7Mult = new Decimal(1)
    }
    if(dim8Mult.lessThan(1)){
        dim8Mult = new Decimal(1)
    }
    if(dim8Mult.lessThan(1)){
        dim8Mult = new Decimal(1)
    }
    dim1Mult = dim1Mult.mul(dimBoostMult);
    dim2Mult = dim2Mult.mul(dimBoostMult);
    dim3Mult = dim3Mult.mul(dimBoostMult);
    dim4Mult = dim4Mult.mul(dimBoostMult);
    dim5Mult = dim5Mult.mul(dimBoostMult);
    dim6Mult = dim6Mult.mul(dimBoostMult);
    dim7Mult = dim7Mult.mul(dimBoostMult);
    dim8Mult = dim8Mult.mul(dimBoostMult);

    if(dim1Mult.greaterThan("1e10")) {
        dim1Mult = dim1Mult.mul(2).div(dim1Mult.log(10))
    }
    if(dim2Mult.greaterThan("1e10")) {
        dim2Mult = dim2Mult.mul(2).div(dim2Mult.log(10))
    }
    if(dim3Mult.greaterThan("1e10")) {
        dim3Mult = dim3Mult.mul(2).div(dim3Mult.log(10))
    }
    if(dim4Mult.greaterThan("1e10")) {
        dim4Mult = dim4Mult.mul(2).div(dim4Mult.log(10))
    }
    if(dim5Mult.greaterThan("1e10")) {
        dim5Mult = dim5Mult.mul(2).div(dim5Mult.log(10))
    }
    if(dim6Mult.greaterThan("1e10")) {
        dim6Mult = dim6Mult.mul(2).div(dim6Mult.log(10))
    }
    if(dim7Mult.greaterThan("1e10")) {
        dim7Mult = dim7Mult.mul(2).div(dim7Mult.log(10))
    }
    if(dim8Mult.greaterThan("1e10")) {
        dim8Mult = dim8Mult.mul(2).div(dim8Mult.log(10))
    }

    // add dimensions

    dim7 = dim7.add(dim8.mul(dim8Mult).mul(tsMult).div(50));
    dim6 = dim6.add(dim7.mul(dim7Mult).mul(tsMult).div(50));
    dim5 = dim5.add(dim6.mul(dim6Mult).mul(tsMult).div(50));
    dim4 = dim4.add(dim5.mul(dim5Mult).mul(tsMult).div(50));
    dim3 = dim3.add(dim4.mul(dim4Mult).mul(tsMult).div(50));
    dim2 = dim2.add(dim3.mul(dim3Mult).mul(tsMult).div(50));
    dim1 = dim1.add(dim2.mul(dim2Mult).mul(tsMult).div(50));

    // antimatter gain

    gain = dim1.mul(dim1Mult).mul(tsMult).div(10);
    gain = gain.mul(developer);
    antimatter = antimatter.add(gain);

    // visual

    document.getElementById("antimatter").innerHTML = "<span class='antimatter-small'>You have <span class='antimatter'>" + sci(antimatter) + "</span> Antimatter.</span>";
    
    document.getElementById("tickspeed").innerHTML = "You have " + sci(tsBought) + " Tickspeed Upgrades. Tickspeed: " + sci(tsMult.mul(100));
    document.getElementById("tickspeedBuy").innerHTML = 'Increase Tickspeed. Cost: ' + sci(tsCost);
    document.getElementById("tickspeedBuy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(tsCost)) {
        document.getElementById("tickspeedBuy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim1").innerHTML = "You have " + sci(dim1) + " First Dimensions. Multiplier: " + sci(dim1Mult) + "x";
    document.getElementById("dim1Buy").innerHTML = "Buy Dimension 1. Cost: " + sci(dim1Cost);
    document.getElementById("dim1Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim1Cost)) {
        document.getElementById("dim1Buy").style = "box-shadow: 0 0 5px #20FF20";
    }
    document.getElementById("dim2").innerHTML = "You have " + sci(dim2) + " Second Dimensions. Multiplier: " + sci(dim2Mult) + "x";
    document.getElementById("dim2Buy").innerHTML = "Buy Dimension 2. Cost: " + sci(dim2Cost);
    document.getElementById("dim2Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim2Cost)) {
        document.getElementById("dim2Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim3").innerHTML = "You have " + sci(dim3) + " Third Dimensions. Multiplier: " + sci(dim3Mult) + "x";
    document.getElementById("dim3Buy").innerHTML = "Buy Dimension 3. Cost: " + sci(dim3Cost);
    document.getElementById("dim3Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim3Cost)) {
        document.getElementById("dim3Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim4").innerHTML = "You have " + sci(dim4) + " Fourth Dimensions. Multiplier: " + sci(dim4Mult) + "x";
    document.getElementById("dim4Buy").innerHTML = "Buy Dimension 4. Cost: " + sci(dim4Cost);
    document.getElementById("dim4Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim4Cost)) {
        document.getElementById("dim4Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim5").innerHTML = "You have " + sci(dim5) + " Fifth Dimensions. Multiplier: " + sci(dim5Mult) + "x";
    document.getElementById("dim5Buy").innerHTML = "Buy Dimension 5. Cost: " + sci(dim5Cost);
    document.getElementById("dim5Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim5Cost)) {
        document.getElementById("dim5Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim6").innerHTML = "You have " + sci(dim6) + " Sixth Dimensions. Multiplier: " + sci(dim6Mult) + "x";
    document.getElementById("dim6Buy").innerHTML = "Buy Dimension 6. Cost: " + sci(dim6Cost);
    document.getElementById("dim6Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim6Cost)) {
        document.getElementById("dim6Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim7").innerHTML = "You have " + sci(dim7) + " Seventh Dimensions. Multiplier: " + sci(dim7Mult) + "x";
    document.getElementById("dim7Buy").innerHTML = "Buy Dimension 7. Cost: " + sci(dim7Cost);
    document.getElementById("dim7Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim7Cost)) {
        document.getElementById("dim7Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dim8").innerHTML = "You have " + sci(dim8) + " Eighth Dimensions. Multiplier: " + sci(dim8Mult) + "x";
    document.getElementById("dim8Buy").innerHTML = "Buy Dimension 8. Cost: " + sci(dim8Cost);
    document.getElementById("dim8Buy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dim8Cost)) {
        document.getElementById("dim8Buy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("dimBoost").innerHTML = "You have " + sci(dimBoostBought) + " Dimension Boosts, Booting All Antimatter Dimensions by " + sci(dimBoostMult) + "x";
    document.getElementById("dimBoostBuy").innerHTML = "Boost Dimensions. Cost: " + sci(dimBoostCost);
    document.getElementById("dimBoostBuy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(dimBoostCost)) {
        document.getElementById("dimBoostBuy").style = "box-shadow: 0 0 5px #20FF20";
    }

    document.getElementById("galaxy").innerHTML = "You have " + sci(galaxyBought) + " Antimatter Galaxies, Boosting Each Tickspeed Upgrade Effect by " + sci(galaxyMult) + "x";
    document.getElementById("galaxyBuy").innerHTML = "Boost Tickspeed. Cost: " + sci(galaxyCost);
    document.getElementById("galaxyBuy").style = "box-shadow: 0 0 5px #FF2020";
    if(antimatter.greaterThanOrEqualTo(galaxyCost)) {
        document.getElementById("galaxyBuy").style = "box-shadow: 0 0 5px #20FF20";
    }
};

setInterval(gameTick, 10);

function save() {

    localStorage.setItem('antimatter', antimatter);
    localStorage.setItem('dim1', dim1);
    localStorage.setItem('dim2', dim2);
    localStorage.setItem('dim3', dim3);
    localStorage.setItem('dim4', dim4);
    localStorage.setItem('dim5', dim5);
    localStorage.setItem('dim6', dim6);
    localStorage.setItem('dim7', dim7);
    localStorage.setItem('dim8', dim8);
    localStorage.setItem('dim1Bought', dim1Bought);
    localStorage.setItem('dim2Bought', dim2Bought);
    localStorage.setItem('dim3Bought', dim3Bought);
    localStorage.setItem('dim4Bought', dim4Bought);
    localStorage.setItem('dim5Bought', dim5Bought);
    localStorage.setItem('dim6Bought', dim6Bought);
    localStorage.setItem('dim7Bought', dim7Bought);
    localStorage.setItem('dim8Bought', dim8Bought);
    localStorage.setItem('tsBought', tsBought);
    localStorage.setItem('dimBoostBought', dimBoostBought);
    localStorage.setItem('galaxyBought', galaxyBought);

}

//ip formula: antimatter.pow(0.00097656304).sub(1).floor()