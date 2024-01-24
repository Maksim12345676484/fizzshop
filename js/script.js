//animation header_navigstion_links

const navigationLink = document.querySelectorAll('.navigation_link');

navigationLink.forEach(function(element){
    element.addEventListener('mouseenter', function() {
        element.style.color = '#5596F9';
})

element.addEventListener('mouseleave', function() {
    element.style.color = '#000';
})

})
//animation header_button_log_in

const buttonLogIn = document.querySelector('.header_button_log_in');

buttonLogIn.addEventListener('mouseenter', function(){
    buttonLogIn.style.backgroundColor = '#f3efef'; 
    buttonLogIn.style.color = '#0500FF'; 
})
buttonLogIn.addEventListener('mouseleave', function(){
        buttonLogIn.style.backgroundColor = '#fff';
        buttonLogIn.style.color = '#000'; 
})   

//animation header_section

const pandoraSilverText1 = document.querySelectorAll('.pandora_silver_text_1');


pandoraSilverText1.forEach(function (element) {
    element.addEventListener('mouseenter', function() {
        element.style.fontSize = '63px';
    });
    
    element.addEventListener('mouseleave', function(){
        element.style.fontSize = ' 58.449px';
    });
})

const pandoraSilverImg = document.querySelectorAll('.img_braclet ')

pandoraSilverImg.forEach(function (element) {
    element.addEventListener('mouseenter', function() {
        element.style.width = '360px';
        element.style.height = '160px';
    })

    element.addEventListener('mouseleave', function() {
        element.style.width = '339px';
        element.style.height = '139px';
    })
})

