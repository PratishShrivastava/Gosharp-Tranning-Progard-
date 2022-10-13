function btn1() {
    document.getElementById("container1").style.backgroundColor = "red";
    document.getElementById("container1").style.color = "white";
}
function btn2() {
    console.log("a");
    document.getElementsByClassName("container2")[0].style.backgroundColor = "red";
    document.getElementsByClassName("container2")[0].style.color = "white";
}
function btn3() {
    document.getElementsByName("container3")[0].style.backgroundColor = "red";
    document.getElementsByName("container3")[0].style.color = "white";
}
function btn4() {
    document.getElementsByTagName("div")[4].style.backgroundColor = "red";
    document.getElementsByTagName("div")[4].style.color = "white";
}
function btn5() {
    document.querySelector(".container5").style.backgroundColor = "red";
    document.querySelector(".container5").style.color = "white";
}
function btn6() {
    document.querySelectorAll(".container")[5].style.backgroundColor = "red";
    document.querySelectorAll(".container")[5].style.color = "white";
}

let element = document.getElementById("ele");
function addHtmlEle(){
    let ptag = document.createElement("div");
    element.appendChild(ptag);
    ptag.innerText = document.querySelector(".container1 p").innerText;
    ptag.classList.add("container");
}


var onmouseover = document.getElementById("onmouseover");
onmouseover.addEventListener("mouseover", onmouseovers);

function onmouseovers(){
    onmouseover.style.backgroundColor = 'red';
}

var onmouseout = document.getElementById("onmouseout");
onmouseout.addEventListener("mouseout", onmouseouts);

function onmouseouts(){
    onmouseout.style.backgroundColor = 'red';
}
var dblclick = document.getElementById("dblclick");
dblclick.addEventListener("dblclick", dblclicks);

function dblclicks(){
    dblclick.style.backgroundColor = 'red';
}

function times() {
    document.getElementById("text").innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!";
}
var set;
function timess() {
    const element = document.getElementById("texts");
    set = setInterval(function() {element.innerHTML += "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quibusdam!</p>"}, 1000);
}

function timesss() {
    clearInterval(set);
}
function createRow() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(3);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "added cell";
    cell2.innerHTML = "added Cell";
}

function insertString() {
    let tab = document.getElementById("tabStr");
    let row = document.getElementById("rowStr");
    let col = document.getElementById("colStr");
    let text1Str = document.getElementById("text1Str");
    let text2Str = document.getElementById("text2Str");
    // console.log(row.value, col.value );
    let table = document.getElementById("stringTable").rows;
    // console.log(table);
    let y=table[tab.value].cells;
    // console.log(y);
    y[row.value].innerHTML=text1Str.value;
    y[col.value].innerHTML=text2Str.value;
}

function createTable()
{

    let rn = document.getElementById("text3Str").value;
    let cn = document.getElementById("text4Str").value;
  
    for(var r=0;r<parseInt(rn,10);r++){
        var x=document.getElementById('row-col-Table').insertRow(r);
        for(var c=0;c<parseInt(cn,10);c++){
            var y=  x.insertCell(c);
            y.innerHTML="Row-" + r + " Column-" + c; 
        }
    }
}