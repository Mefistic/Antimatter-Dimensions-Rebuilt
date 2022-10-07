let game = {
    antimatter: new Decimal("10"),
    infinitypoints: new Decimal("0"),
    dim1: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim2: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim3: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim4: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim5: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim6: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim7: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    dim8: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost1: new Decimal("0"),
        cost10: new Decimal("0"),
        mult: new Decimal("0")
    },
    tickspeed: {
        amount: new Decimal("0"),
        cost: new Decimal("0"),
        effect: new Decimal("0")
    },
    dimboost: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost: new Decimal("0"),
        effect: new Decimal("0")
    },
    galaxy: {
        amount: new Decimal("0"),
        bought: new Decimal("0"),
        cost: new Decimal("0"),
        effect: new Decimal("0")
    }
}

function generate(thing) {

    if (thing == "antimatter") {
        return new Decimal(game.dim1.amount).mul(game.dim1.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim1") {
        return new Decimal(game.dim2.amount).mul(game.dim2.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim2") {
        return new Decimal(game.dim3.amount).mul(game.dim3.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim3") {
        return new Decimal(game.dim4.amount).mul(game.dim4.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim4") {
        return new Decimal(game.dim5.amount).mul(game.dim5.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim5") {
        return new Decimal(game.dim6.amount).mul(game.dim6.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim6") {
        return new Decimal(game.dim7.amount).mul(game.dim7.mult).mul(game.tickspeed.effect).div(60);
    }

    if (thing == "dim7") {
        return new Decimal(game.dim8.amount).mul(game.dim8.mult).mul(game.tickspeed.effect).div(60);
    }

}

function dimmult(thing) {

if (thing == "dim1") {
    thing = new Decimal("2").pow(game.dim1.bought.div(10).floor());
    return thing;
}

if (thing == "dim2") {
    thing = new Decimal("2").pow(game.dim2.bought.div(10).floor());
    return thing;
}

if (thing == "dim3") {
    thing = new Decimal("2").pow(game.dim3.bought.div(10).floor());
    return thing;
}

if (thing == "dim4") {
    thing = new Decimal("2").pow(game.dim4.bought.div(10).floor());
    return thing;
}

if (thing == "dim5") {
    thing = new Decimal("2").pow(game.dim5.bought.div(10).floor());
    return thing;
}

if (thing == "dim6") {
    thing = new Decimal("2").pow(game.dim6.bought.div(10).floor());
    return thing;
}

if (thing == "dim7") {
    thing = new Decimal("2").pow(game.dim7.bought.div(10).floor());
    return thing;
}

if (thing == "dim8") {
    thing = new Decimal("2").pow(game.dim8.bought.div(10).floor());
    return thing;
}
}

function short(num) {
    if (num.e >= 1e10) {
        e = new Decimal(num.e)
        num = "ee" + e.log10().toFixed(5);
        return num;
    }
    if (num.greaterThanOrEqualTo("1000")) {
        num = num.m.toFixed(2) + "e" + num.e;
        return num;
    }
    else {
        num = num.toFixed(2);
        return num;
    }
}

function buy(thing) {
    if (thing == "1dim1") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim1.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim1.cost1);
            game.dim1.amount = game.dim1.amount.add("1");
            game.dim1.bought = game.dim1.bought.add("1");
        }
    }
    if (thing == "1dim2") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim2.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim2.cost1);
            game.dim2.amount = game.dim2.amount.add("1");
            game.dim2.bought = game.dim2.bought.add("1");
        }
    }
    if (thing == "1dim3") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim3.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim3.cost1);
            game.dim3.amount = game.dim3.amount.add("1");
            game.dim3.bought = game.dim3.bought.add("1");
        }
    }
    if (thing == "1dim4") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim4.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim4.cost1);
            game.dim4.amount = game.dim4.amount.add("1");
            game.dim4.bought = game.dim4.bought.add("1");
        }
    }
    if (thing == "1dim5") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim5.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim5.cost1);
            game.dim5.amount = game.dim5.amount.add("1");
            game.dim5.bought = game.dim5.bought.add("1");
        }
    }
    if (thing == "1dim6") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim6.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim6.cost1);
            game.dim6.amount = game.dim6.amount.add("1");
            game.dim6.bought = game.dim6.bought.add("1");
        }
    }
    if (thing == "1dim7") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim7.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim7.cost1);
            game.dim7.amount = game.dim7.amount.add("1");
            game.dim7.bought = game.dim7.bought.add("1");
        }
    }
    if (thing == "1dim8") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim8.cost1)) {
            game.antimatter = game.antimatter.sub(game.dim8.cost1);
            game.dim8.amount = game.dim8.amount.add("1");
            game.dim8.bought = game.dim8.bought.add("1");
        }
    }
    if (thing == "10dim1") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim1.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim1.cost10);
            game.dim1.amount = game.dim1.amount.add(new Decimal(10).sub(game.dim1.bought.div(10).floor().mul(10).sub(game.dim1.bought).abs()));
            game.dim1.bought = game.dim1.bought.add(new Decimal(10).sub(game.dim1.bought.div(10).floor().mul(10).sub(game.dim1.bought).abs()));
        }
    }
    if (thing == "10dim2") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim2.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim2.cost10);
            game.dim2.amount = game.dim2.amount.add(new Decimal(10).sub(game.dim2.bought.div(10).floor().mul(10).sub(game.dim2.bought).abs()));
            game.dim2.bought = game.dim2.bought.add(new Decimal(10).sub(game.dim2.bought.div(10).floor().mul(10).sub(game.dim2.bought).abs()));
        }
    }
    if (thing == "10dim3") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim3.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim3.cost10);
            game.dim3.amount = game.dim3.amount.add(new Decimal(10).sub(game.dim3.bought.div(10).floor().mul(10).sub(game.dim3.bought).abs()));
            game.dim3.bought = game.dim3.bought.add(new Decimal(10).sub(game.dim3.bought.div(10).floor().mul(10).sub(game.dim3.bought).abs()));
        }
    }
    if (thing == "10dim4") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim4.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim4.cost10);
            game.dim4.amount = game.dim4.amount.add(new Decimal(10).sub(game.dim4.bought.div(10).floor().mul(10).sub(game.dim4.bought).abs()));
            game.dim4.bought = game.dim4.bought.add(new Decimal(10).sub(game.dim4.bought.div(10).floor().mul(10).sub(game.dim4.bought).abs()));
        }
    }
    if (thing == "10dim5") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim5.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim5.cost10);
            game.dim5.amount = game.dim5.amount.add(new Decimal(10).sub(game.dim5.bought.div(10).floor().mul(10).sub(game.dim5.bought).abs()));
            game.dim5.bought = game.dim5.bought.add(new Decimal(10).sub(game.dim5.bought.div(10).floor().mul(10).sub(game.dim5.bought).abs()));
        }
    }
    if (thing == "10dim6") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim6.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim6.cost10);
            game.dim6.amount = game.dim6.amount.add(new Decimal(10).sub(game.dim6.bought.div(10).floor().mul(10).sub(game.dim6.bought).abs()));
            game.dim6.bought = game.dim6.bought.add(new Decimal(10).sub(game.dim6.bought.div(10).floor().mul(10).sub(game.dim6.bought).abs()));
        }
    }
    if (thing == "10dim7") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim7.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim7.cost10);
            game.dim7.amount = game.dim7.amount.add(new Decimal(10).sub(game.dim7.bought.div(10).floor().mul(10).sub(game.dim7.bought).abs()));
            game.dim7.bought = game.dim7.bought.add(new Decimal(10).sub(game.dim7.bought.div(10).floor().mul(10).sub(game.dim7.bought).abs()));
        }
    }
    if (thing == "10dim8") {
        if (game.antimatter.greaterThanOrEqualTo(game.dim8.cost10)) {
            game.antimatter = game.antimatter.sub(game.dim8.cost10);
            game.dim8.amount = game.dim8.amount.add(new Decimal(10).sub(game.dim8.bought.div(10).floor().mul(10).sub(game.dim8.bought).abs()));
            game.dim8.bought = game.dim8.bought.add(new Decimal(10).sub(game.dim8.bought.div(10).floor().mul(10).sub(game.dim8.bought).abs()));
        }
    }
    if (thing == "tickspeed") {
        if (game.antimatter.greaterThanOrEqualTo(game.tickspeed.cost)) {
            game.antimatter = game.antimatter.sub(game.tickspeed.cost);
            game.tickspeed.amount = game.tickspeed.amount.add("1");
        }
    }
    if (thing == "max") {
        buy("10dim8");
        buy("10dim1");
        buy("tickspeed");
        buy("10dim2");
        buy("10dim7");
        buy("10dim3");
        buy("10dim6");
        buy("10dim5");
        buy("10dim4");
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'm') {
        buy("max");
    }
});

function tick() {

    game.dim1.mult = dimmult("dim1");
    game.dim2.mult = dimmult("dim2");
    game.dim3.mult = dimmult("dim3");
    game.dim4.mult = dimmult("dim4");
    game.dim5.mult = dimmult("dim5");
    game.dim6.mult = dimmult("dim6");
    game.dim7.mult = dimmult("dim7");
    game.dim8.mult = dimmult("dim8");
    game.tickspeed.effect = new Decimal(1.2).pow(game.tickspeed.amount);

    game.tickspeed.cost = new Decimal("10").pow(game.tickspeed.amount.add("3"));
    game.dim1.cost1 = new Decimal("1e3").pow(game.dim1.bought.div(10).floor().add("1")).div(100);
    game.dim2.cost1 = new Decimal("1e4").pow(game.dim2.bought.div(10).floor().add("1")).div(100);
    game.dim3.cost1 = new Decimal("1e6").pow(game.dim3.bought.div(10).floor().add("1")).div(100);
    game.dim4.cost1 = new Decimal("1e9").pow(game.dim4.bought.div(10).floor().add("1")).div(10);
    game.dim5.cost1 = new Decimal("1e13").pow(game.dim5.bought.div(10).floor().add("1")).div(1);
    game.dim6.cost1 = new Decimal("1e18").pow(game.dim6.bought.div(10).floor().add("1")).div(0.01);
    game.dim7.cost1 = new Decimal("1e24").pow(game.dim7.bought.div(10).floor().add("1")).div(0.0001);
    game.dim8.cost1 = new Decimal("1e30").pow(game.dim8.bought.div(10).floor().add("1")).div(0.00000001);
/*
    if (game.dim1.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim1.cost1 = new Decimal(10).pow(((game.dim1.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim2.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim2.cost1 = new Decimal(10).pow(((game.dim2.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim3.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim3.cost1 = new Decimal(10).pow(((game.dim3.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim4.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim4.cost1 = new Decimal(10).pow(((game.dim4.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim5.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim5.cost1 = new Decimal(10).pow(((game.dim5.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim6.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim6.cost1 = new Decimal(10).pow(((game.dim6.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim7.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim7.cost1 = new Decimal(10).pow(((game.dim7.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }
    if (game.dim8.cost1.greaterThanOrEqualTo("1e50")) {
        game.dim8.cost1 = new Decimal(10).pow(((game.dim8.cost1.div("4.6e16")).pow(1.5)).log10().floor())
    }*/
    if (game.tickspeed.cost.greaterThanOrEqualTo("1e50")) {
        game.tickspeed.cost = new Decimal(10).pow(((game.tickspeed.cost.div("1e25")).pow(2)).log10().floor())
    }

    game.dim1.cost10 = game.dim1.cost1.mul(new Decimal(10).sub(game.dim1.bought.div(10).floor().mul(10).sub(game.dim1.bought).abs()));
    game.dim2.cost10 = game.dim2.cost1.mul(new Decimal(10).sub(game.dim2.bought.div(10).floor().mul(10).sub(game.dim2.bought).abs()));
    game.dim3.cost10 = game.dim3.cost1.mul(new Decimal(10).sub(game.dim3.bought.div(10).floor().mul(10).sub(game.dim3.bought).abs()));
    game.dim4.cost10 = game.dim4.cost1.mul(new Decimal(10).sub(game.dim4.bought.div(10).floor().mul(10).sub(game.dim4.bought).abs()));
    game.dim5.cost10 = game.dim5.cost1.mul(new Decimal(10).sub(game.dim5.bought.div(10).floor().mul(10).sub(game.dim5.bought).abs()));
    game.dim6.cost10 = game.dim6.cost1.mul(new Decimal(10).sub(game.dim6.bought.div(10).floor().mul(10).sub(game.dim6.bought).abs()));
    game.dim7.cost10 = game.dim7.cost1.mul(new Decimal(10).sub(game.dim7.bought.div(10).floor().mul(10).sub(game.dim7.bought).abs()));
    game.dim8.cost10 = game.dim8.cost1.mul(new Decimal(10).sub(game.dim8.bought.div(10).floor().mul(10).sub(game.dim8.bought).abs()));

    game.antimatter = game.antimatter.add(generate("antimatter"));
    game.dim1.amount = game.dim1.amount.add(generate("dim1"));
    game.dim2.amount = game.dim2.amount.add(generate("dim2"));
    game.dim3.amount = game.dim3.amount.add(generate("dim3"));
    game.dim4.amount = game.dim4.amount.add(generate("dim4"));
    game.dim5.amount = game.dim5.amount.add(generate("dim5"));
    game.dim6.amount = game.dim6.amount.add(generate("dim6"));
    game.dim7.amount = game.dim7.amount.add(generate("dim7"));

    document.getElementById("antimatter").innerHTML =
    '<span class="antimattercountsmall">You have </span>' + '<span class="antimattercount">' + short(game.antimatter) + '</span>'+ '<span class="antimattercountsmall"> Antimatter.</span>';

    document.getElementById("antimattersec").innerHTML =
    '<span class="antimattersec">You are gaining ' + short(generate("antimatter").mul(60)) + ' Antimatter per second.</span>';
    
    document.getElementById("dimensionordinal").innerHTML = 'Dimension<br><br>1st Dimension<br><p></p>2nd Dimension<br><p></p>3rd Dimension<br><p></p>4th Dimension<br><p></p>5th Dimension<br><p></p>6th Dimension<br><p></p>7th Dimension<br><p></p>8th Dimension';

    document.getElementById("dimensionamount").innerHTML =
    'Amount<br><br>' + short(game.dim1.amount) + '<br><p></p>' + short(game.dim2.amount) + '<br><p></p>' + short(game.dim3.amount) + '<br><p></p>' + short(game.dim4.amount) + '<br><p></p>' + short(game.dim5.amount) + '<br><p></p>' + short(game.dim6.amount) + '<br><p></p>' + short(game.dim7.amount) + '<br><p></p>' + short(game.dim8.amount);

    document.getElementById("dimensionbought").innerHTML =
    'Bought<br><br>' + short(game.dim1.bought) + '<br><p></p>' + short(game.dim2.bought) + '<br><p></p>' + short(game.dim3.bought) + '<br><p></p>' + short(game.dim4.bought) + '<br><p></p>' + short(game.dim5.bought) + '<br><p></p>' + short(game.dim6.bought) + '<br><p></p>' + short(game.dim7.bought) + '<br><p></p>' + short(game.dim8.bought);

    document.getElementById("dimensionmult").innerHTML =
    'Multiplier<br><br>' + short(game.dim1.mult) + 'x<br><p></p>' + short(game.dim2.mult) + 'x<br><p></p>' + short(game.dim3.mult) + 'x<br><p></p>' + short(game.dim4.mult) + 'x<br><p></p>' + short(game.dim5.mult) + 'x<br><p></p>' + short(game.dim6.mult) + 'x<br><p></p>' + short(game.dim7.mult) + 'x<br><p></p>' + short(game.dim8.mult) + 'x';

    document.getElementById("dim1buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim1.cost1);
    document.getElementById("dim2buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim2.cost1);
    document.getElementById("dim3buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim3.cost1);
    document.getElementById("dim4buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim4.cost1);
    document.getElementById("dim5buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim5.cost1);
    document.getElementById("dim6buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim6.cost1);
    document.getElementById("dim7buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim7.cost1);
    document.getElementById("dim8buy1").innerHTML = 'Buy 1. Cost: ' + short(game.dim8.cost1);

    document.getElementById("dim1buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim1.cost10);
    document.getElementById("dim2buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim2.cost10);
    document.getElementById("dim3buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim3.cost10);
    document.getElementById("dim4buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim4.cost10);
    document.getElementById("dim5buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim5.cost10);
    document.getElementById("dim6buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim6.cost10);
    document.getElementById("dim7buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim7.cost10);
    document.getElementById("dim8buy10").innerHTML = 'Buy Until 10. Cost: ' + short(game.dim8.cost10);

    document.getElementById("tickspeed").innerHTML = 'Tickspeed: ' + short(game.tickspeed.effect);
    document.getElementById("tickspeedeffect").innerHTML = 'Multiply the tickspeed by ' + short(new Decimal("1.2")) + 'x';
    document.getElementById("tickspeedbuy").innerHTML = 'Cost: ' + short(game.tickspeed.cost);

    if (game.antimatter.greaterThanOrEqualTo(game.tickspeed.cost)) {
        document.getElementById("tickspeedbuy").className = "tickspeedbuybutton";
    }
    else {
        document.getElementById("tickspeedbuy").className = "tickspeedbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim1.cost1)) {
        document.getElementById("dim1buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim1buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim2.cost1)) {
        document.getElementById("dim2buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim2buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim3.cost1)) {
        document.getElementById("dim3buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim3buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim4.cost1)) {
        document.getElementById("dim4buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim4buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim5.cost1)) {
        document.getElementById("dim5buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim5buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim6.cost1)) {
        document.getElementById("dim6buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim6buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim7.cost1)) {
        document.getElementById("dim7buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim7buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim8.cost1)) {
        document.getElementById("dim8buy1").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim8buy1").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim1.cost10)) {
        document.getElementById("dim1buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim1buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim2.cost10)) {
        document.getElementById("dim2buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim2buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim3.cost10)) {
        document.getElementById("dim3buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim3buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim4.cost10)) {
        document.getElementById("dim4buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim4buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim5.cost10)) {
        document.getElementById("dim5buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim5buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim6.cost10)) {
        document.getElementById("dim6buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim6buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim7.cost10)) {
        document.getElementById("dim7buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim7buy10").className = "dimbuybuttondisabled";
    }
    if (game.antimatter.greaterThanOrEqualTo(game.dim8.cost10)) {
        document.getElementById("dim8buy10").className = "dimbuybutton";
    }
    else {
        document.getElementById("dim8buy10").className = "dimbuybuttondisabled";
    }
}

setInterval(tick, 1000/60);