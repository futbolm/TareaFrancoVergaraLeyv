//dom --> document object model
//JS--> Key Sensitive
// window 
    // document


let welcomeNav=document.querySelector('.nav__welcome');  //let para crear variables
let serarchNav=document.querySelector('.nav__search');
console.log(welcomeNav);
console.log(serarchNav); 


let iconMenu=document.querySelector('.nav__menu__contenedor--iconMenu');
let menu = document.querySelector('.nav__menu__contenedor__rigth__box');
window.addEventListener('scroll',function(){
    //console.log('hiciste scroll');
    //console.log(scrollY);
    if (scrollY>0) {
        //codigo
       // console.log('esconde mis elementos');
        welcomeNav.classList.add('d-none'); 
        serarchNav.classList.add('d-none'); 
    } else{
        //codigo
        //console.log('muestra mis elementos');
        welcomeNav.classList.remove('d-none');
        serarchNav.classList.remove('d-none');
    }
})

iconMenu.addEventListener('click',function(evento){
    //console.log('Hiciste click');
    //console.log(evento); 
    evento.preventDefault();
    menu.classList.toggle('active'); //va a verificar si tiene la clase avtive siempre que haga click
})