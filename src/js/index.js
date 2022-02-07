function obrirForm(){
    let wind = window.open("SecondaryScreen.html");
    wind.addEventListener("unload",function (){
        console.log(document.cookie);
        loadCookie();
        sendCookie();
    })
}

function closeWindow(){
    saveCookie();
    window.close();
}

window.sendCookie = function(){
    let divCookie = document.createElement("div");
    let cookie = document.createTextNode(document.cookie);
    divCookie.appendChild(cookie);
}

function saveCookie(){
    let n = document.getElementById("n").value;
    let m = document.getElementById("m").value;
    let r = document.getElementById("r").value;
    setCookie(n,m,r);
}

function setCookie(n,m,r){
    document.cookie="n="+n;
    document.cookie="m="+m;
    document.cookie="r="+r;

}

function loadCookie(){
    let cookie = document.cookie.split(";");
    for(let c of cookie){
        var num = c.split("=");
        if(num[0].trim()=="n"){
            var n = num[1];
        }
        if(num[0].trim()=="m"){
            var m = num[1];
        }
        if(num[0].trim()=="r"){
            var r = num[1];
        }
    }
    var numRajoles = (n*m/r).toFixed();
    Math.ceil(numRajoles);
    console.log("Num rajoles: " + numRajoles);
}