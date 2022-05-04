function test(){
    var user=document.Login.user.value;
    var password=document.Login.password.value;

    if (user=="test-user" && password=="123456789") {
        window.location="Index.html";  alert("Great, your username and password are correct")
        }
    else{
        alert("Wrong username or password");
        }
}
