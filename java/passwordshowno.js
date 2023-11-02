const pswrd =  document.querySelector(".login2 input[type='password']")
toggleBtn = document.querySelector(".login2 i img")
toggleBtn.onclick = ()=>{
    if(pswrd.type == "password"){
        pswrd.type = "text";
    }
    else{pswrd.type = "password"}
}