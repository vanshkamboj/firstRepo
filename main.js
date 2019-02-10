function saveUserDetails(){
    var id= document.getElementById("user_id").value;
    var pass=document.getElementById("user_pass").value;
    if(typeof(Storage)!=="undefined"){
    
        localStorage.setItem("user_id",id);
        localStorage.setItem("User_pass",pass);
        sessionStorage.setItem("user_id",id);
        sessionStorage.setItem("user_pass",pass);
    }
    else{
        document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage...";

    }


}
function GetUserData(){
    document.getElementById("local").innerHTML="Local Storage: "+localStorage.getItem("user_id");
    document.getElementById("session").innerHTML="Session Storage: "+sessionStorage.getItem("user_id");

}