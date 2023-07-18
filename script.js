let myForm = document.getElementById("myForm");
let options = document.getElementById("options");
let message = document.getElementById("message");
message.innerText = "You selected Option 1.";
myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    switch(options.value){
        case "option1":
        message.innerText = "You selected Option 1.";
        break;
        case "option2":
        message.innerText = "You selected Option 2.";
        break;
        case "option3":
        message.innerText = "You selected Option 3.";
        break;
    }
})