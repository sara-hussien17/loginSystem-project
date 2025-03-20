var userNameInput= document.getElementById("usernameInput");
var userEmailInput= document.getElementById("userEmailInput");
var userPassnput= document.getElementById("userPasswordInput");
var signupBtn=document.getElementById("signupBtn")

var userInfo
if (localStorage.getItem("users")==null){
    userInfo=[]  
}
else{
    userInfo=JSON.parse(localStorage.getItem("users"));
}

function signUp(){
    userInputsValidation();
    isExist();
    if (userInputsValidation()==true && isExist()==false)

{
    var user={
name:userNameInput.value ,
email:userEmailInput.value,
password:userPassnput.value,

    }
    userInfo.push(user) 
    localStorage.setItem("users",JSON.stringify(userInfo));
    var confirmMass=document.getElementById("confirmMsg");
    confirmMass.classList.replace("d-none","d-block");
    var signIn =document.getElementById("signin");
    signIn.classList.replace("d-none","d-block");
    var tryAgainMsg= document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-block","d-none");
    var accountExistMsg= document.getElementById("accountExistMsg");
    accountExistMsg.classList.replace("d-block","d-none");

}
else
{
    var tryAgainMsg = document.getElementById("tryAgainMsg");
    tryAgainMsg.classList.replace("d-none", "d-block");
}

}

 function userNameValidation(){
var userNameAlert =document.getElementById("usernameAlert");
var ragex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
if(ragex.test(userNameInput.value)== true&& userNameInput.value !=null){
    userNameInput.classList.add("is-valid");
    userNameInput.classList.remove("is-invalid");
    userNameAlert.classList.replace("d-block","d-none");
    return true;
}else{
    userNameInput.classList.add("is-invalid");
    userNameInput.classList.remove("is-valid");
    userNameAlert.classList.replace("d-none","d-block");
    return false; 
}}
 
 function passwordValidation(){
var userPasswordAlert=document.getElementById("userPasswordAlert");
var ragex=/^.{5,15}$/;
if(ragex.test(userPassnput.value)== true&& userPassnput.value !=null){
    userPassnput.classList.add("is-valid");
    userPassnput.classList.remove("is-invalid");
    userPasswordAlert.classList.replace("d-block","d-none");
    return true;
}else{
    userPassnput.classList.add("is-invalid");
    userPassnput.classList.remove("is-valid");
    userPasswordAlert.classList.replace("d-none","d-block");
    return false; 

 }}

 function userEmailValidation(){
    var userEmailAlert=document.getElementById("userEmailAlert");
    var ragex = /@[a-z]{5,10}(\.com)$/;
    if(ragex.test(userEmailInput.value)== true&& userEmailInput.value!=null){
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block","d-none");
        return true;
    }else{
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none","d-block");
        return false; 
    
     } 
 }
function userInputsValidation(){
    userNameValidation()
    passwordValidation()
    userEmailValidation()
if( userNameValidation()==true&& passwordValidation()==true && userEmailValidation()==true){
    return true;
}

else{ 
    return false;
}
}

function isExist(){

    var accountExistMsg= document.getElementById("accountExistMsg");
    for (var i=0; i< userInfo.length ;i++ ){
    if(userInfo[i].name ==userNameInput.value ||userInfo[i].email==userEmailInput.value){
        userNameInput.classList.remove("is-valid");
        userEmailInput.classList.remove("is-valid");
        userPassnput.classList.remove("is-valid");
        accountExistMsg.classList.replace("d-none","d-block");

        return true;
    
}}
        return false;


}


var userName=localStorage.getItem("userName");

function login(){
    var loginEmail= document.getElementById("loginEmail");
    var loginPassword= document.getElementById("loginPassword");
    var loginBtn= document.getElementById("loginBtn");
    var wrongMassage=document.getElementById("wrongMassage")

    if(loginEmail.value=="" ||loginPassword.value=="" ){
        var fillMassage= document.getElementById("fillMassage");
        fillMassage.classList.replace("d-none","d-block");
        return false;

    }
    for (var i=0; i< userInfo.length ;i++ )
        if(userInfo[i].email.toLowerCase() ==loginEmail.value.toLowerCase() && userInfo[i].password.toLowerCase()==loginPassword.value.toLowerCase()){
    localStorage.setItem('userName',userInfo[i].name);
    loginBtn.setAttribute("href","welcom.html");


        }else{
     wrongMassage.classList.replace("d-none","d-block");        
        }

}
function displayWelcome(){
    document.getElementById("username").innerHTML = "welcom "+ userName;
}
function logout(){
    localStorage.removeItem("userName");
}