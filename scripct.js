var pw1=document.getElementById("pswd1").value;
var pw2=document.getElementById("pswd2").value;
const btn=document.getElementById("butt");
function validate()
{
    if(pw1!==pw2)
    {
        alert("Passwords Did not match");
    }
    else{
        alert("Password Created Succesfully");
    }
}
btn.addEventListener("click",validate);
