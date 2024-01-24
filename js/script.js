//animation header_navigstion_links

var navigationLink = document.querySelectorAll('.navigation_link');

navigationLink.forEach(function(element){
    element.addEventListener('mouseenter', function() {
        element.style.color = '#5596F9';
})

element.addEventListener('mouseleave', function() {
    element.style.color = '#000';
})

})
//animation header_button_log_in

var buttonLogIn = document.querySelector('.header_button_log_in');

buttonLogIn.addEventListener('mouseenter', function(){
    buttonLogIn.style.backgroundColor = '#f3efef'; 
    buttonLogIn.style.color = '#0500FF'; 
})
buttonLogIn.addEventListener('mouseleave', function(){
        buttonLogIn.style.backgroundColor = '#fff';
        buttonLogIn.style.color = '#000'; 
})   

//animation header_section

var pandoraSilverText1 = document.querySelector('.pandora_silver_text_1');

pandoraSilverText1.addEventListener('mouseenter', function() {
    pandoraSilverText1.style.fontSize = '68px';
    pandoraSilverText1.style.left = '50px';
});

pandoraSilverText1.addEventListener('mouseleave', function(){
    pandoraSilverText1.style.fontSize = ' 58.449px';
    pandoraSilverText1.style.left = '0px';
});