let game = {
    antimatter:new Decimal(10),
    tab:'antimatter',
    ip:new Decimal(0),
    infpower:new Decimal(0),
    unlockedinfinity:false,
    infinitied:new Decimal(0),
    timeplayed:new Decimal(0),
    infinitytime:new Decimal(0),
    buy10multi:new Decimal(2),
    ts: {
        amount:new Decimal(0),
        cost:new Decimal(0),
        effect:new Decimal(0),
        increase:new Decimal(0)
    },
    dimboost: {
        amount:new Decimal(0),
        cost:new Decimal(0),
        effect:new Decimal(0)
    },
    galaxy: {
        amount:new Decimal(0),
        cost:new Decimal(0),
        effect:new Decimal(0)
    },
    d:[],
    id:[],
    ach:[],
    infupg:[]
}

const basecosts=['',10, 100, 1e3, 1e6, 1e9, 1e12, 1e15, 1e21]
const costscaling=['',100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9]
const infupgcosts = ['', 1, 1, 2, 2, 4, 16, 64, 128, 256, 512]
const idcosts=['',10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8]

for(i=1;i<11;i++){game.infupg[i]={bought:false, cost:new Decimal(0)}}

function buyinfupg(upg){if(new Decimal(game.ip).greaterThanOrEqualTo(game.infupg[upg].cost)){
    if(game.infupg[upg].bought==false){
    game.infupg[upg].bought=true
    game.ip=game.ip.sub(game.infupg[upg].cost)}}
}

for(i=1;i<11;i++){game.ach[i]={unlocked:false}}

for(i=1;i<9;i++){game.d[i]={amount:new Decimal(0), bought:new Decimal(0), cost:new Decimal(0), mult:new Decimal(0)}
game.id[i]={amount:new Decimal(0), bought:new Decimal(0), cost:new Decimal(0), mult:new Decimal(0)}}

function f(n){
    n=new Decimal(n)
    ne=new Decimal(n.e)
    if(ne.greaterThanOrEqualTo(1e9)){
        n=n.mul(1.0001)
        nee=ne.e
        n='e'+ne.m.toFixed(3)+'e'+ne.e
        return n}
    if(n.greaterThanOrEqualTo(1e3)){
        n=n.mul(1.0001)
        ne=ne.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        n=n.m.toFixed(3)+'e'+ne
        return n}
    n=n.toFixed(2)
    return n
}

function updatemult(){
    game.buy10multi=new Decimal(2)
    game.galaxy.effect=new Decimal(game.galaxy.amount).div(40)
    if(game.infupg[6].bought){game.galaxy.effect=game.galaxy.effect.mul(1.25)}
    game.ts.increase=new Decimal(1.1).add(game.galaxy.effect)
    game.ts.effect=game.ts.increase.pow(game.ts.amount)
    if(game.infupg[5].bought){game.dimboost.effect=new Decimal(4).pow(game.dimboost.amount)}
    else{game.dimboost.effect=new Decimal(2).pow(game.dimboost.amount)}
    for(i=1;i<9;i++){
        game.d[i].mult=game.buy10multi.pow(game.d[i].bought).mul(game.dimboost.effect).max(1)
        game.id[i].mult=new Decimal(2).pow(game.id[i].bought).max(1)
        if(game.infupg[7].bought){game.d[i].mult=game.d[i].mult.mul(new Decimal(game.ip).div(new Decimal(game.ip).root(2).max(1)).max(1))}
        if(game.infupg[8].bought){game.d[i].mult=game.d[i].mult.mul(new Decimal(game.timeplayed).div(10))}
        game.d[i].mult=game.d[i].mult.mul(new Decimal(game.infpower).pow(0.5).max(1))
    }
    if(game.infupg[1].bought){for(i=2;i<9;i++){game.d[i].mult=game.d[i].mult.mul(new Decimal(game.d[1].bought).pow(0.5).max(1))}}
    if(game.infupg[2].bought){for(i=1;i<8;i++){game.d[i].mult=game.d[i].mult.mul(new Decimal(game.d[8].bought).mul(5).pow(0.5).max(1))}}
}

function updatecosts(){
    for(i=1;i<9;i++){
        game.d[i].cost=new Decimal(basecosts[i]).mul(new Decimal(costscaling[i]).pow(game.d[i].bought))
        if(game.d[i].cost.greaterThanOrEqualTo(1e100)){game.d[i].cost=game.d[i].cost.pow(new Decimal(game.d[i].bought).div(1000).add(1))}
        game.id[i].cost=new Decimal(idcosts[i]).mul(new Decimal(costscaling[i]).pow(game.id[i].bought))
        if(game.id[i].cost.greaterThanOrEqualTo(1e100)){game.id[i].cost=game.id[i].cost.pow(game.id[i].bought.div(1000).add(1))}
    }
    game.ts.cost=new Decimal(10).pow(new Decimal(game.ts.amount).add(3))
    if(game.ts.cost.greaterThanOrEqualTo(1e100)){game.ts.cost=game.ts.cost.pow(new Decimal(game.ts.amount).div(1000).add(1))}
    game.dimboost.cost=new Decimal(20).add(new Decimal(game.dimboost.amount).mul(10)).mul(new Decimal(game.dimboost.amount).div(4).floor().mul(2).add(1)).floor()
    game.galaxy.cost=new Decimal(60).add(new Decimal(game.galaxy.amount).mul(40)).mul(new Decimal(game.galaxy.amount).div(2).floor().mul(1.5).add(1)).floor()
    if(game.infupg[3].bought){game.dimboost.cost=game.dimboost.cost.sub(15)}
    if(game.infupg[4].bought){game.galaxy.cost=game.galaxy.cost.sub(25)}
    for(i=1;i<11;i++){game.infupg[i].cost=new Decimal(infupgcosts[i])}
}

function generate(){
    for(i=2;i<9;i++){
        game.id[i-1].amount=new Decimal(game.id[i-1].amount).add(new Decimal(game.id[i].amount).mul(game.id[i].mult).div(6))
    }
    for(i=2;i<9;i++){
        game.d[i-1].amount=new Decimal(game.d[i-1].amount).add(new Decimal(game.d[i].amount).mul(game.d[i].mult).mul(game.ts.effect).div(6))
    }
    game.infpower=new Decimal(game.infpower).add(game.id[1].amount.mul(game.id[1].mult).div(6))
    game.antimatter=new Decimal(game.antimatter).add(game.d[1].amount.mul(game.d[1].mult).mul(game.ts.effect).div(6))
}

function updateui() {
    if(game.unlockedinfinity==true){document.getElementById('infinitynav').style = 'display: box'; document.getElementById('infdimensionsnav').style = 'display: box'}
    if(game.tab=='antimatter'){document.getElementById('antimattertab').style = 'display: box'
    for(i=1;i<9;i++){
        document.getElementById('d'+i+'amount').innerHTML=f(game.d[i].amount)
        document.getElementById('d'+i+'bought').innerHTML=f(game.d[i].bought)
        document.getElementById('d'+i+'mult').innerHTML=f(game.d[i].mult)+'x'
        document.getElementById('d'+i+'buy').innerHTML='Cost: '+f(game.d[i].cost)
        document.getElementById('buytickspeed').innerHTML='Cost: '+f(game.ts.cost)
        if(game.antimatter.greaterThanOrEqualTo(game.d[i].cost)){document.getElementById('d'+i+'buy').className='buttonenabled'}
        else{document.getElementById('d'+i+'buy').className='buttondisabled'}
    }
    document.getElementById("antimatter").innerHTML=f(game.antimatter)
    document.getElementById("tickspeed").innerHTML=f(game.ts.effect)
    document.getElementById("tickspeedincrease").innerHTML=f(game.ts.increase)
    document.getElementById("dimboost").innerHTML='You have '+f(game.dimboost.amount)+' Dimension Boosts, Multiplying All Dimension Multipliers by x'+f(game.dimboost.effect)+'.'
    document.getElementById("galaxy").innerHTML='You have '+f(game.galaxy.amount)+' Antimatter Galaxies, giving a +'+f(game.galaxy.effect)+' bonus to Tickspeed Upgrades.'
    document.getElementById("buydimboost").innerHTML='Cost: '+f(game.dimboost.cost)+' 1st Dimensions Bought.'
    document.getElementById("buygalaxy").innerHTML='Cost: '+f(game.galaxy.cost)+' 1st Dimensions Bought.'
    if(game.antimatter.greaterThanOrEqualTo(game.ts.cost)){
        document.getElementById('buytickspeed').className='buttonenabled'
    }
    else{document.getElementById('buytickspeed').className='buttondisabled'}
    if(new Decimal(game.d[1].bought).greaterThanOrEqualTo(game.dimboost.cost)){
        document.getElementById('buydimboost').className='buttonenabled'
    }
    else{document.getElementById('buydimboost').className='buttondisabled'}
    if(new Decimal(game.d[1].bought).greaterThanOrEqualTo(game.galaxy.cost)){
        document.getElementById('buygalaxy').className='buttonenabled'
    }
    else{document.getElementById('buygalaxy').className='buttondisabled'}
}else{document.getElementById('antimattertab').style = 'display: none'}



    if(game.tab=='infinity'){document.getElementById('infinitytab').style = 'display: box'
    document.getElementById("ip").innerHTML=f(game.ip)
    document.getElementById("ipgain").innerHTML=f(game.antimatter.div(1.79e308).pow(0.0075).sub(1).ceil().max(0))
    if(game.antimatter.greaterThanOrEqualTo(1.79e308)){document.getElementById("crunch").className="crunch"}
    else{document.getElementById("crunch").className="crunchdisabled"}
    for(i=1;i<11;i++){
        if(new Decimal(game.ip).greaterThanOrEqualTo(game.infupg[i].cost)){
        document.getElementById("infupg"+i).className='infupgenabled'}else{
            document.getElementById("infupg"+i).className='infupgdisabled'
        }
        if(game.infupg[i].bought==true){document.getElementById("infupg"+i).className='infupgbought'}}
        document.getElementById("infupg1effect").innerHTML=f(new Decimal(game.d[1].bought).pow(0.5).max(1))
        document.getElementById("infupg2effect").innerHTML=f(new Decimal(game.d[8].bought).mul(5).pow(0.5).max(1))
        document.getElementById("infupg7effect").innerHTML=f(new Decimal(game.ip).div(new Decimal(game.ip).root(2).max(1)).max(1))
        document.getElementById("infupg8effect").innerHTML=f(new Decimal(game.timeplayed).div(10))
    }else{document.getElementById('infinitytab').style = 'display: none'}



    if(game.tab=='infdimensions'){document.getElementById('infdimensionstab').style = 'display: box'
    document.getElementById("ip2").innerHTML=f(game.ip)
    document.getElementById("infpower").innerHTML=f(game.infpower)
    document.getElementById("infpowereffect").innerHTML=f(game.infpower.pow(0.5).max(1))
    for(i=1;i<9;i++){
    document.getElementById('id'+i+'amount').innerHTML=f(game.id[i].amount)
    document.getElementById('id'+i+'bought').innerHTML=f(game.id[i].bought)
    document.getElementById('id'+i+'mult').innerHTML=f(game.id[i].mult)+'x'
    document.getElementById('id'+i+'buy').innerHTML='Cost: '+f(game.id[i].cost)+' IP'
    if(new Decimal(game.ip).greaterThanOrEqualTo(game.id[i].cost)){
        document.getElementById('id'+i+'buy').className='infdimenabled'
    }else{document.getElementById('id'+i+'buy').className='buttondisabled'}
    }}else{document.getElementById('infdimensionstab').style = 'display: none'}



    if(game.tab=='achievements'){document.getElementById('achievementstab').style = 'display: box';
    for(i=1;i<11;i++){if(game.ach[i].unlocked){document.getElementById('ach'+i).className='achget'}else{document.getElementById('ach'+i).className='ach'}}
    }else{document.getElementById('achievementstab').style = 'display: none'}
}

function tick(){
    updatemult()
    updatecosts()
    generate()
    updateui()
    checkach()
    if(game.antimatter.greaterThanOrEqualTo(1.79e308)){game.unlockedinfinity=true}
    game.timeplayed=new Decimal(game.timeplayed).add(1/60)
    game.infinitytime=new Decimal(game.infinitytime).add(1/60)
}

function buy(d){
    if(game.antimatter.greaterThanOrEqualTo(game.d[d].cost)){
        game.antimatter=game.antimatter.sub(game.d[d].cost)
        game.d[d].amount=new Decimal(game.d[d].amount).add(1)
        game.d[d].bought=new Decimal(game.d[d].bought).add(1)
        updatecosts()
    }
}

function idbuy(d){
    if(new Decimal(game.ip).greaterThanOrEqualTo(game.id[d].cost)){
        game.ip=game.ip.sub(game.id[d].cost)
        game.id[d].amount=new Decimal(game.id[d].amount).add(1)
        game.id[d].bought=new Decimal(game.id[d].bought).add(1)
    }
}

function buytickspeed(){
    if(game.antimatter.greaterThanOrEqualTo(game.ts.cost)){
        game.antimatter=new Decimal(game.antimatter).sub(game.ts.cost)
        game.ts.amount=new Decimal(game.ts.amount).add(1)
    }
}

function dimboost(){
    if(game.d[1].bought.greaterThanOrEqualTo(game.dimboost.cost)){
        for(i=1;i<9;i++){
            game.d[i]={
                amount:new Decimal(0),
                bought:new Decimal(0),
                cost:new Decimal(0),
                mult:new Decimal(0)
            }
        }
        game.antimatter=new Decimal(10)
        game.ts.amount=new Decimal(0)
        game.dimboost.amount=new Decimal(game.dimboost.amount).add(1)
    }
}

function galaxy(){
    if(game.d[1].bought.greaterThanOrEqualTo(game.galaxy.cost)){
        for(i=1;i<9;i++){
            game.d[i]={
                amount:new Decimal(0),
                bought:new Decimal(0),
                cost:new Decimal(0),
                mult:new Decimal(0)
            }
        }
        game.antimatter=new Decimal(10)
        game.ts.amount=new Decimal(0)
        game.dimboost.amount=new Decimal(0)
        game.galaxy.amount=new Decimal(game.galaxy.amount).add(1)
    }
}

function crunch(){
    if(game.antimatter.greaterThanOrEqualTo(1.79e308)){
        for(i=1;i<9;i++){
            game.d[i]={
                amount:new Decimal(0),
                bought:new Decimal(0),
                cost:new Decimal(0),
                mult:new Decimal(0)
            }
        }
        game.ip=new Decimal(game.ip).add(game.antimatter.div(1.79e308).pow(0.0075).sub(1).ceil().max(0))
        game.antimatter=new Decimal(10)
        game.ts.amount=new Decimal(0)
        game.dimboost.amount=new Decimal(0)
        game.galaxy.amount=new Decimal(0)
        game.infinitied=new Decimal(game.infinitied).add(1)
        game.infinitytime=new Decimal(0)
        if(game.infupg[9].bought){game.dimboost.amount=new Decimal(game.dimboost.amount).add(4)}
        if(game.infupg[10].bought){game.galaxy.amount=new Decimal(game.galaxy.amount).add(2)}
    }
}

function checkach(){
    if(game.antimatter.greaterThanOrEqualTo(100)){game.ach[1].unlocked=true}
    if(new Decimal(game.dimboost.amount).greaterThanOrEqualTo(1)){game.ach[2].unlocked=true}
    if(new Decimal(game.dimboost.amount).greaterThanOrEqualTo(2)){game.ach[3].unlocked=true}
    if(new Decimal(game.dimboost.amount).greaterThanOrEqualTo(4)){game.ach[4].unlocked=true}
    if(new Decimal(game.galaxy.amount).greaterThanOrEqualTo(1)){game.ach[5].unlocked=true}
    if(new Decimal(game.galaxy.amount).greaterThanOrEqualTo(2)){game.ach[6].unlocked=true}
    if(game.antimatter.greaterThanOrEqualTo(1.79e308)){game.ach[7].unlocked=true}
    if(game.infpower.greaterThanOrEqualTo(100)){game.ach[8].unlocked=true}
    k=0
    for(i=1;i<11;i++){if(game.infupg[i].bought){k++}}
    if(k==10){game.ach[9].unlocked=true}
    if(new Decimal(game.infinitied).greaterThanOrEqualTo(308)){game.ach[10].unlocked=true}
}

window.addEventListener('keydown', (event) => {
    if (event.key == 'm') {
        for(l=1;l<101;l++){updatecosts()
        for(i=1;i<9;i++){buy(i)}
        buytickspeed()}
    }
})

setInterval(tick, 1000/360)

function save() {
    localStorage.setItem('game', JSON.stringify(game))
}

if (localStorage.length !== 0) {
    game = JSON.parse(localStorage.getItem('game'))
}

setInterval(save, 1000)