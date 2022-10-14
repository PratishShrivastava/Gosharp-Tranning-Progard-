setInterval(clock, 1000);

function clock(){
    var date = new Date();
    var Hours = date.getHours();
    var Min = date.getMinutes(); 
    var Sec = date.getSeconds();
    var Day = "AM";

    if(Hours == 0){
        Hours = 12;
    }

    if (Hours>12) {
        Hours -= 12;
        Day = "PM";
    }

    Hours = (Hours < 10) ? "0" + Hours : Hours;
    Min = (Min < 10) ? "0" + Min : Min;
    Sec = (Sec < 10) ? "0" + Sec : Sec;

    document.getElementById("hr").textContent = Hours + ' : ' + Min + ' : ' + Sec + ' ' + Day;
}


function btn1() {
    document.getElementById("hr").style.fontFamily = "'Indie Flower', cursive";
}
function btn2() {
    document.getElementById("hr").style.fontFamily = "'Nabla', cursive";
}
function btn3() {
    document.getElementById("hr").style.fontFamily = "'Orbitron', sans-serif";
}
function btn4() {
    document.getElementById("hr").style.fontFamily = "'Poiret One', cursive";
}
function btn5() {
    document.getElementById("hr").style.fontFamily = "'Henny Penny', cursive";
}
function btn6() {
    document.getElementById("hr").style.fontFamily = "'Silkscreen', cursive";
}
function btn7() {
    document.getElementById("hr").style.fontFamily = "'Teko', sans-serif";
}


function colorBtn1() {
    document.getElementById("hr").style.color = "#ffffff";
}
function colorBtn2() {
    document.getElementById("hr").style.color = "#17D4FE";
}
function colorBtn3() {
    document.getElementById("hr").style.color = "blue";
}
function colorBtn4() {
    document.getElementById("hr").style.color = "red";
}
function colorBtn5() {
    document.getElementById("hr").style.color = "yellow";
}
function colorBtn6() {
    document.getElementById("hr").style.color = "blueviolet";
}
function colorBtn7() {
    document.getElementById("hr").style.color = "brown";
}