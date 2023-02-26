var started=0;
// xo
var arr=['<img src="strawberry.png" id="char">','<img src="apple.png" id="char">','<img src="watermel.png" id="char">','<img src="orange.png" id="char">','<img src="grape.png" id="char">','<img src="cherry.png" id="char">'];
var gamingArr=[];
var timer,time;
var gaming=0;
var running=0;
var canClick=1;
var score=0;
var stopTic=0;
var started=0;
var j=0;
var game=0;

// snl
var scount=0;
var posA=0,posB=0;
var startedA=0,startedB=0;
var canPlay=1;

//tg
var tcount=0;
var tdcount=1;
var canWalk=1;
var prevtg=100;

//wam
var pos=1;
var c=0;
var time=0;
var canwhack=1;



//snl
function rand(){
    var r=Math.ceil(Math.random()*6);
    if (canPlay==1) {
        document.getElementById("bt").innerHTML=r;        
    }
    gameSnake(r);
}

function gameSnake(r){
    if (scount%2==0 && canPlay==1) {
        document.getElementById("chance").innerHTML="Player B's turn";
        if (startedA==0 && r==6) {
            document.getElementById("1a").innerHTML="<img src='bp.png' class='snl'>";
            posA=1;
            startedA=1;
        }
        else if (startedA>0 && (posA+r)<=30) {
            document.getElementById(posA+"a").innerHTML="";
            document.getElementById(r+posA+"a").innerHTML="<img src='bp.png' class='snl'>";
            posA+=r;
            
            if (posA==3) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(22+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=22;
            }
            else if (posA==5) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(8+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=8;
            }
            else if (posA==11) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(26+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=26;
            }
            else if (posA==20) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(29+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=29;
            }
            else if (posA==17) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(4+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=4;
            }
            else if (posA==19) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(7+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=7;
            }
            else if (posA==21) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(9+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=9;
            }
            else if (posA==27) {
                document.getElementById(posA+"a").innerHTML="";
                document.getElementById(1+"a").innerHTML="<img src='bp.png' class='snl'>";
                posA=1;
            }
            else if(posA==30){
                win(1);
            }
        }
        scount++;
    }
    else if(scount%2==1 && canPlay==1){
        document.getElementById("chance").innerHTML="Player A's turn";
        if (startedB==0 && r==6) {
            document.getElementById("1b").innerHTML="<img src='pp.png'  class='snl'>";
            posB=1;
            startedB=1;
        }
        else if (startedB!=0 && (posB+r)<=30) {
            document.getElementById(posB+"b").innerHTML="";
            document.getElementById(r+posB+"b").innerHTML="<img src='pp.png'  class='snl'>";
            posB+=r;
            
            if (posB==3) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(22+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=22;
            }
            else if (posB==5) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(8+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=8;
            }
            else if (posB==11) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(26+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=26;
            }
            else if (posB==20) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(29+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=29;
            }
            else if (posB==17) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(4+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=4;
            }
            else if (posB==19) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(7+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=7;
            }
            else if (posB==21) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(9+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=9;
            }
            else if (posB==27) {
                document.getElementById(posB+"b").innerHTML="";
                document.getElementById(1+"b").innerHTML="<img src='pp.png'  class='snl'>";
                posB=1;
            }
            else if(posB==30){
                    win(2);
            }
        
        }
        
        scount++;
        
    }
}

function win(n){
    if (n==1) {
        document.getElementById("chance").innerHTML="Player A wins";
        canPlay=0;
    }
    else{
        document.getElementById("chance").innerHTML="Player B wins";
        canPlay=0;
    }
}

//tg
function walk(n){
    if((n==tcount+1 || n==tcount+2) && canWalk==1){
        var r=Math.ceil(Math.random()*2);
        var real=tcount+3-r;
        if(r==1){
            d="a";
            b="b"
        }
        else if(r==2){
            d="b";
            b="a"
        }
        document.getElementById(tdcount+d).innerHTML="";
        if(n!=real){
            window.location.href="warning.html";
            canWalk=0;
        }
        else{
            tdcount++;
            tcount+=10;
        }
        document.getElementById(prevtg).innerHTML="";
        document.getElementById(n).innerHTML="<img src='tgchar.png' id='char'>";
        prevtg=n;
    }
}
function wintg(){
    window.location.reload(false);
    window.location.href="win.html";
}

//wam
function wcount(){
    if(time>29){
        canwhack=0;
    }
    if(canwhack==1){
        c++;
        document.getElementById("sc").innerHTML="Score :"+c;
    }
}
function start(){
    if(started==1){
        return;
    }
    started=1;
    const intervalID = setInterval(mol, 800);
    const interval = setInterval(timer, 1000);

    function mol(){
        if(time>29){
            document.getElementById("sc").innerHTML="Score :"+c;
            return
        }
        else{
            var r=Math.ceil(Math.random()*25);     
            document.getElementById(r).innerHTML="<img src='mole.png' onclick='wcount()' class='wam'>"; 
            document.getElementById(pos).innerHTML="";
            pos=r;
        }
    }
    function timer(){
        if(time>29){
            clearInterval(interval);
            exit()
        }
        document.getElementById("t").innerHTML="Time left :"+(29-time);
        
        time+=1;
    }
}
function restart(){
    window.location.reload(false);
}
