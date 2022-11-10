let nameValue = false;
let emailValue = false;
function nameCheck(){
    let nameVal = document.getElementById("form4Example1").value;
    const regex=/^[a-zA-Z ]*$/i;
    if(nameVal.length < 3 || nameVal.length > 20){
        document.getElementById("notification").innerHTML = "* Enter Valid name";
        nameValue = false;
    }else{
        if(regex.test(nameVal)){
            document.getElementById("notification").innerHTML = "";
            nameValue = true;
        }else{
            document.getElementById("notification").innerHTML = "* Enter Valid name";
            nameValue = false;
        }
        
    }
}

function emailCheck(){
    let emailVal = document.getElementById("form4Example2").value;
    if(emailVal.length < 1){
        if(nameValue){
            document.getElementById("notification").innerHTML = "* Enter Valid email id";
        }else{
            document.getElementById("notification").innerHTML = "* Enter Valid name and email id";
        }
    }else{
        emailValue = true;
    }
}

function submitResponse(){
    if(nameValue && emailValue){
        document.getElementById("submit-response").innerHTML = "Thank you for the response";
    }else{
        document.getElementById("submit-response").innerHTML = "";
        document.getElementById("notification").innerHTML = "* Enter Valid input";
    }
}
