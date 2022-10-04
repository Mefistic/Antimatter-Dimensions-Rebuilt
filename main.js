// this is my first time coding please dont cry
let antimatter = new Decimal(1);
let tsBought = new Decimal(0);
let dim1 = new Decimal(0);
let dim2 = new Decimal(0);
let dim3 = new Decimal(0);
let dim4 = new Decimal(0);
let dim1Bought = new Decimal(0);
let dim2Bought = new Decimal(0);
let dim3Bought = new Decimal(0);
let dim4Bought = new Decimal(0);
let dim1Cost = new Decimal(0);
let dim2Cost = new Decimal(0);
let dim3Cost = new Decimal(0);
let dim4Cost = new Decimal(0);
let dim1Mult = new Decimal(0);
let dim2Mult = new Decimal(0);
let dim3Mult = new Decimal(0);
let dim4Mult = new Decimal(0);
let tsCost = new Decimal(0);
let tsMult = new Decimal(0);

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

function gameTick(){
    // costs
    tsCost = new Decimal(100);
    tsCost = tsCost.pow(tsBought.add(1));
    dim1Cost = new Decimal(10);
    dim1Cost = dim1Cost.pow(dim1Bought);
    dim2Cost = new Decimal(100);
    dim2Cost = dim2Cost.pow(dim2Bought.add(1));
    dim3Cost = new Decimal(1000);
    dim3Cost = dim3Cost.pow(dim3Bought.add(1));
    dim4Cost = new Decimal(10000);
    dim4Cost = dim4Cost.pow(dim4Bought.add(1));
    // multipliers
    tsMult = new Decimal(1.5).pow(tsBought);
    dim1Mult = new Decimal(2).pow(dim1Bought.sub(1)).mul(tsMult);
    dim2Mult = new Decimal(2).pow(dim2Bought.sub(1)).mul(tsMult);
    dim3Mult = new Decimal(2).pow(dim3Bought.sub(1)).mul(tsMult);
    dim4Mult = new Decimal(2).pow(dim4Bought.sub(1)).mul(tsMult);
    if(tsMult.lessThan(1)){
        tsMult = new Decimal(1)
    }
    if(dim1Mult.lessThan(1)){
        tsMult = new Decimal(1)
    }
    if(dim2Mult.lessThan(1)){
        tsMult = new Decimal(1)
    }
    if(dim3Mult.lessThan(1)){
        tsMult = new Decimal(1)
    }
    if(dim4Mult.lessThan(1)){
        tsMult = new Decimal(1)
    }
    // add dimensions and antimatter
    dim3 = dim3.add(dim4.mul(dim4Mult).div(100));
    dim2 = dim2.add(dim3.mul(dim3Mult).div(100));
    dim1 = dim1.add(dim2.mul(dim2Mult).div(100));
    antimatter = antimatter.add((dim1.div(100)).mul(dim1Mult));
    // visual
    document.getElementById("antimatter").innerHTML = "<h1>You have " + antimatter.toFixed(2) + " Antimatter.</h1>";
    document.getElementById("tickspeed").innerHTML = "You have " + tsBought.round().toFixed(2) + " Tickspeed Upgrades. Multiplier: x" + tsMult.toFixed(2);
    document.getElementById("tickspeedBuy").innerHTML = "Buy Tickspeed Upgrade. Cost: " + tsCost.round().toFixed(2);
    document.getElementById("dim1").innerHTML = "You have " + dim1.round().toFixed(2) + " First Dimensions. Multiplier: x" + dim1Mult.toFixed(2);
    document.getElementById("dim1Buy").innerHTML = "Buy Dimension 1. Cost: " + dim1Cost.round().toFixed(2);
    document.getElementById("dim2").innerHTML = "You have " + dim2.round().toFixed(2) + " Second Dimensions. Multiplier: x" + dim2Mult.toFixed(2);
    document.getElementById("dim2Buy").innerHTML = "Buy Dimension 2. Cost: " + dim2Cost.round().toFixed(2);
    document.getElementById("dim3").innerHTML = "You have " + dim3.round().toFixed(2) + " Third Dimensions. Multiplier: x" + dim3Mult.toFixed(2);
    document.getElementById("dim3Buy").innerHTML = "Buy Dimension 3. Cost: " + dim3Cost.round().toFixed(2);
    document.getElementById("dim4").innerHTML = "You have " + dim4.round().toFixed(2) + " Fourth Dimensions. Multiplier: x" + dim4Mult.toFixed(2);
    document.getElementById("dim4Buy").innerHTML = "Buy Dimension 4. Cost: " + dim4Cost.round().toFixed(2);
};

setInterval(gameTick, 10);