
function favoriteChar(){  
    let name =  document.getElementById("name").value;
    
    if(name.toLowerCase() === "shrek"){
        document.getElementById("shrekker").innerHTML = "Congratulations! You are a " + name + "head. You have good taste!";
        document.getElementById("shrek-pic").src = "images/shrek2.jpg";
    }
    else if (name.toLowerCase() === "donkey" || name.toLowerCase() === "donkeh"){
        document.getElementById("shrekker").innerHTML = "You are a " + name + "head. This is a good choice.";
        document.getElementById("shrek-pic").src = "images/donkeh.jpg";
    }
    else if (name.toLowerCase() === "dragon"){
        document.getElementById("shrekker").innerHTML = "You are a " + name + "head. This is an ok choice.";
        document.getElementById("shrek-pic").src = "images/dragon.jpg";
    }
    else if (name.toLowerCase() === "fiona"){
        document.getElementById("shrekker").innerHTML = "You are a " + name + "head. This is an ok choice.";
        document.getElementById("shrek-pic").src = "images/fiona.jpg";
    }
    else if (name.toLowerCase() === "farquaad" || name.toLowerCase() === "lord farquaad"){
        alert(name + "?!?! The police are on their way to your house wee woo wee woo");
    }

    else{
         alert("Your favorite character is " + name + ". This is not Shrek. Please try again.");
    }

    document.getElementById("shrek-form").style.display = "none";
    document.getElementById("try-again").style.visibility = "visible";
}    

function displayUserInfo(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    var movie = document.getElementById("movie").value;
    document.getElementById("signup-label").innerHTML = "Welcome to Shrek"
    document.getElementById("user-form").style.display = "none";
    document.getElementById("user-table").style.visibility = "visible";
    document.getElementById("tuname").innerHTML = username;
    for(var s in password){
        document.getElementById("tpwd").innerHTML += "*";
    }
    
    document.getElementById("tmovie").innerHTML = movie;

}

function messageToShrek(){
    var cbox1 = document.getElementById("choice1").checked;
    var cbox2 = document.getElementById("choice2").checked;
    var cbox3 = document.getElementById("choice3").checked;
    var messageElement = document.getElementById("msg-to-shrek");
    var choices = [cbox1, cbox2, cbox3];
    var responses = ["This is a very nice swamp, Shrek", "Thank you so much for inviting me here", "I would like to leave your swamp now"];
    var message = "You say: ";
    for(let i = 0; i < choices.length; i++){      
        if(choices[i]){
            if(message != "You say: "){
                message += ", ";
                if(i == 1){
                message += responses[i].toLowerCase();
                }
                else{
                    
                    message += " however, " + responses[i];
                }
            }
            else{
                message += responses[i];
            }
        }
    }
    if(message == "You say: "){
        message += "I am speechless about your swamp, Shrek";
    }
    messageElement.innerHTML = message;
}



    