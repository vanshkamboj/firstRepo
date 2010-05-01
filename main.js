
function saveUserDetails(){
    
    if(typeof(Storage)!=="undefined"){
        var id= document.getElementById("user_id").value;
        var pass=document.getElementById("user_pass").value;
        localStorage.setItem("user_id",id);
        localStorage.setItem("User_pass",pass);
        sessionStorage.setItem("user_id",id);
        sessionStorage.setItem("user_pass",pass);
    }
    else{
        document.getElementById("result").innerHTML="Sorry, your browser does not support Web Storage...";

    }


}
function validation(){
    saveUserDetails();
    var id= document.getElementById("user_id").value;
    var pass=document.getElementById("user_pass").value;
    if((id=="")||(id==null)){
        window.alert("Please Enter Username");
    }
    else if((pass=="")||(pass==null)){
        window.alert("Please Enter password");
    }
    else if((id=="admin")&&(pass=="admin")){
        window.location.href="admin.html";
    }
    else if((id=="user")&&(pass=="user")){
        window.location.href="UserInfo.html";
    }
    else if((id=="guest")&&(pass=="guest")){
        window.location.href="guest.html";
    }
    else{
        window.alert("Invalid user or password....!!!");

    }

}
function GetUserData(){
    document.getElementById("local").innerHTML="Local Storage: "+localStorage.getItem("user_id");
    document.getElementById("session").innerHTML="Session Storage: "+sessionStorage.getItem("user_id");

}