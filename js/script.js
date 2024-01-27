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

//animation CATEGORY SECTION

const categorySection = document.querySelectorAll('.category_section');

categorySection.forEach(function(element){
    element.addEventListener('mouseenter', function() {
        element.style.width = '270px';
        element.style.height = '420px';
        element.style.boxShadow = 'none';
})

element.addEventListener('mouseleave', function() {
    element.style.width = '250px';
    element.style.height = '398px';
    element.style.boxShadow = '0px 4px 37px 0px rgba(255, 255, 255, 0.25)';
})

})

