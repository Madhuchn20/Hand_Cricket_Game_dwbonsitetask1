var total = 0;
function score(){
    var scr = u;
    total += scr;
    var half = "Half Century";
    var centum = "Century";
    document.getElementById('score').innerHTML = total;
    if(total >= 50 && total <= 55){
        document.getElementById('achievement').innerHTML = half;
    }
    else if(total >= 100 && total <= 105){
        document.getElementById('achievement').innerHTML = centum;
    }
    else{
        document.getElementById('achievement').innerHTML = "";
    }
}
function single(){
    u = 1;
    var r = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoiceshow").innerHTML = u;
    document.getElementById("computerchoiceshow").innerHTML = r;
    if(r === 1){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        total = 0;
    }
    else{
        var c = "A single taken";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function two(){
    u = 2;
    var r = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoiceshow").innerHTML = u;
    document.getElementById("computerchoiceshow").innerHTML = r;
    if(r === 2){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        total = 0;
    }
    else{
        var c = "2 runs";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function three(){
    u = 3;
    var r = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoiceshow").innerHTML = u;
    document.getElementById("computerchoiceshow").innerHTML = r;
    if(r === 3){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        total = 0;
    }
    else{
        var c = "3 runs";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function boundary(){
    u = 4;
    var r = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoiceshow").innerHTML = u;
    document.getElementById("computerchoiceshow").innerHTML = r;
    if(r === 4){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        total = 0;
    }
    else{
        var c = "Into the gaps and it's a four!";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function fifer(){
    u = 5;
    var r = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoiceshow").innerHTML = u;
    document.getElementById("computerchoiceshow").innerHTML = r;
    if(r === 5){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        total = 0;
    }
    else{
        var c = "No ball and a boundary!";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}

function maximum(){
    u = 6;
    var r = Math.floor(Math.random() * 6) + 1;
    document.getElementById("userchoiceshow").innerHTML = u;
    document.getElementById("computerchoiceshow").innerHTML = r;
    if(r === 6){
        var o = "Out!"
        document.getElementById("comments").innerHTML = o;
        total= 0;
    }
    else{
        var c = "Clears the ropes for a six";
        document.getElementById("comments").innerHTML = c;
        score();
    }
}