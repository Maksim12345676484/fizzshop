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

const headerSectionOne = document.querySelectorAll('.header_section_one');
const imgBraclet = document.querySelector('.img_braclet');
const pandoraSilverText = document.querySelector('.pandora_silver_text');
const pandoraSilverTextTwo = document.querySelector('.pandora_silver_text_2');
const pandoraSilverTextThree = document.querySelector('.pandora_silver_text_3')


headerSectionOne.forEach(function(element) {
    element.addEventListener('mouseenter', function () {
        pandoraSilverText.style.fontSize = '80px';
        pandoraSilverText.style.top = ' 50px';
        pandoraSilverText.style.left = '10px';
        imgBraclet.style.width = '410px';
        imgBraclet.style.bottom = '100px';
        pandoraSilverTextTwo.style.fontSize = '60px';
        pandoraSilverTextTwo.style.bottom = '200px';
        pandoraSilverTextTwo.style.left = '220px';
        pandoraSilverTextThree.style.bottom = '220px'
        pandoraSilverTextThree.style.left = '-70px'
    })
    element.addEventListener('mouseleave', function() {
        pandoraSilverText.style.fontSize = '58.449px';
        pandoraSilverText.style.top = '0';
        pandoraSilverText.style.left = '60px';
        imgBraclet.style.width = '339px';
        imgBraclet.style.bottom = '0';
        pandoraSilverTextTwo.style.fontSize = '45px';
        pandoraSilverTextTwo.style.bottom = '0';
        pandoraSilverTextTwo.style.left = '120px'; 
        pandoraSilverTextThree.style.bottom = '0'
        pandoraSilverTextThree.style.left = '-0'
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


