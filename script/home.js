var time = new Date()
var timenow = time.getHours()+":"+time.getMinutes()
var timeele = document.getElementById("currenttime")
timeele.innerText = timenow

function gmaps(){
    window.open("https://www.google.com/maps")   
}
function phone(){
    window.open("./phone.html")
}
function bluetooth(){
    window.open("./bluetooth.html")
}
function radio(){
    window.open("./radio.html")
}

function google(){
    window.open("https://play.google.com/store/games?device=windows")
}
function music(){
    window.open("https://music.apple.com/us/genre/music/id357816609")
}

function settings(){
    window.open("./settings.html")
}

function about(){
    window.open("./about.html")
}