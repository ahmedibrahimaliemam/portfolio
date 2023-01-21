//declear a variables of navbar items
let services=document.getElementById("services") ;
let projects=document.getElementById("projects") ;
let contact=document.getElementById("contact") ;
let logo=document.getElementsByClassName("name") ;
//declear a variables of projects item
let item_zero=document.getElementById("item-zero") ;
let item_one=document.getElementById("item-one") ;
let item_two=document.getElementById("item-two") ;
let item_three=document.getElementById("item-three") ;
let item_four=document.getElementById("item-four") ;
let item_five=document.getElementById("item-five") ;
//events of projects
item_zero.onclick=function(){
    window.location="https://ahmedibrahimaliemam.github.io/E-commerce/" ;
}
item_one.onclick=function(){
window.location="https://ahmedibrahimaliemam.github.io/System-CRUDS-/" ;
}
item_two.onclick=function(){
    window.location="https://ahmedibrahimaliemam.github.io/game-oop-js/" ;
}
item_three.onclick=function(){
    window.location="https://ahmedibrahimaliemam.github.io/templatehtml-css/" ;
}
//end events of projects
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
