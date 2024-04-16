'use strict'

window.onload = function() {
    let allcookies = document.cookie;
    console.log('allcookies:' + allcookies);
};


function WriteCookie() { 
    if (document.loginform.username.value == "") { 
        alert("Please enter value"); 
        return; 
    } 

    if (document.loginform.password.value == "") { 
        alert("Please enter value"); 
        return; 
    } 

    let cookievalue = document.loginform.username.value + ";"; 

    document.cookie = "name=" + cookievalue; 
      
    document.write("Setting Cookies : "  
        + "name=" + cookievalue); 
    
    window.location.href="index.html";
} 


function EraseCookie() { 
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}