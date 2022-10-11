function chang(){
    document.getElementById("para").innerHTML = "Hello my name is pratish shrivastava.";
}

function fullName(){
    document.getElementById("fname").placeholder = "Full Name";
    document.getElementById("name").innerHTML = "Full Name: ";
    let hide =  document.getElementsByClassName("hide");
    let lname = document.getElementById("lname").value;
    let fname = document.getElementById("fname").value;
    if(lname == ""){
        console.log(fname);
    }else{
        
        console.log(lname);
    }

    for(var i of hide){
        i.style.display = 'none';
    }

}

