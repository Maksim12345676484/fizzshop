var navigationLink = document.querySelectorAll('.navigation_link');

navigationLink.forEach(function(element){
    element.addEventListener('mouseenter', function() {
        element.style.color = '#5596F9';
})

element.addEventListener('mouseleave', function() {
    element.style.color = '#000';
})

})
