function save() {
    localStorage.setItem('antimatter', game.antimatter);
    localStorage.setItem('tickspeedamount', game.tickspeed.amount);
    localStorage.setItem('dim1amount', game.dim1.amount);
    localStorage.setItem('dim1bought', game.dim1.bought);
    localStorage.setItem('dim2amount', game.dim2.amount);
    localStorage.setItem('dim2bought', game.dim2.bought);
    localStorage.setItem('dim3amount', game.dim3.amount);
    localStorage.setItem('dim3bought', game.dim3.bought);
    localStorage.setItem('dim4amount', game.dim4.amount);
    localStorage.setItem('dim4bought', game.dim4.bought);
    localStorage.setItem('dim5amount', game.dim5.amount);
    localStorage.setItem('dim5bought', game.dim5.bought);
    localStorage.setItem('dim6amount', game.dim6.amount);
    localStorage.setItem('dim6bought', game.dim6.bought);
    localStorage.setItem('dim7amount', game.dim7.amount);
    localStorage.setItem('dim7bought', game.dim7.bought);
    localStorage.setItem('dim8amount', game.dim8.amount);
    localStorage.setItem('dim8bought', game.dim8.bought);
    localStorage.setItem('dimboostamount', game.dimboost.amount)
}

if (localStorage.length !== 0) {
    game.antimatter = new Decimal(localStorage.antimatter);
    game.tickspeed.amount = new Decimal(localStorage.tickspeedamount);
    game.dim1.amount = new Decimal(localStorage.dim1amount);
    game.dim1.bought = new Decimal(localStorage.dim1bought);
    game.dim2.amount = new Decimal(localStorage.dim2amount);
    game.dim2.bought = new Decimal(localStorage.dim2bought);
    game.dim3.amount = new Decimal(localStorage.dim3amount);
    game.dim3.bought = new Decimal(localStorage.dim3bought);
    game.dim4.amount = new Decimal(localStorage.dim4amount);
    game.dim4.bought = new Decimal(localStorage.dim4bought);
    game.dim5.amount = new Decimal(localStorage.dim5amount);
    game.dim5.bought = new Decimal(localStorage.dim5bought);
    game.dim6.amount = new Decimal(localStorage.dim6amount);
    game.dim6.bought = new Decimal(localStorage.dim6bought);
    game.dim7.amount = new Decimal(localStorage.dim7amount);
    game.dim7.bought = new Decimal(localStorage.dim7bought);
    game.dim8.amount = new Decimal(localStorage.dim8amount);
    game.dim8.bought = new Decimal(localStorage.dim8bought);
    game.dimboost.amount = new Decimal(localStorage.dimboostamount);
}

setInterval(save, 1000)