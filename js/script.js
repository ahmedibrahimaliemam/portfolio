let services=document.getElementById("services") ;
let projects=document.getElementById("projects") ;
let contact=document.getElementById("contact") ;
let logo=document.getElementsByClassName("name") ;
logo.onclick=function(){
    window.scrollTo({
        top: 0 , 
        left: 0 , 
        behavior: 'smooth'
    }) ;
}
console.log(services,projects,contact) ;
services.onclick=function(){
    window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });
}
projects.onclick=function(){
    window.scrollTo({
        top: 1100,
        left: 0,
        behavior: 'smooth'
      });
}
contact.onclick=function(){
    window.scrollTo({
        top: 1900,
        left: 0,
        behavior: 'smooth'
      });
}
//media query matches
document.addEventListener("DOMContentLoaded" ,init) ;
function init(){
    let query=window.matchMedia("(max-width:767px)") ;
    if(query.matches){
        services.onclick=function(){
            window.scrollTo({
                top: 850,
                left: 0,
                behavior: 'smooth'
              });
        }
        projects.onclick=function(){
            window.scrollTo({
                top: 1850,
                left: 0,
                behavior: 'smooth'
              });
        }
        contact.onclick=function(){
            window.scrollTo({
                top: 4070,
                left: 0,
                behavior: 'smooth'
              });
        }
    }
}
