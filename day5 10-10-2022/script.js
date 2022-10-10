function alertBox() {
    alert("I am a alert box.");
}
function confirmBox() {
    let text = "Do you Want to continue.";
    if (confirm(text) == true) {
        text = "You pressed OK!";
    } else {
        text = "You pressed Canceled!";
    }
    confirm(text);
}
function promptBox() {
    let name = prompt("Please enter your name", "Pratish Shrivastava");
    if (name != null) {
        prompt("Hello " + name + "! How are you.");
    }else{
        alert("user cancel the prompt.");
    }
}

function palindrome() {
    let text = document.getElementById("text").value;
    res = 0;
    for (let i = 0;i<text.length/2;i++) { 
        if(text[i] !== text[text.length-1-i]){
            alert('It is not a palindrome');
            res = 1;
        }
    }
    if(res == 0){
        alert('It is a palindrome');
    }

}
