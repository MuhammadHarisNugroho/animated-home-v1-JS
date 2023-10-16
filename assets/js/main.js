//
var toogleMenu = document.querySelectorAll('.toggle-menu'),
    wrapper    = document.querySelector('.wrapper');

for (var i = 0; i < toogleMenu.length; i++){
    toogleMenu[i].addEventListener('click', menuAction);
}

document.addEventListener('keyup', function(e){
    if(e.keyCode == 27) {
        if(wrapper.classList.contains('show-menu')){
            menuAction();
        }
    }
});

function menuAction() {
    if(wrapper.classList.contains('show-menu')){
        wrapper.classList.remove('show-menu');
    }
    else {
        wrapper.classList.add('show-menu');
    }
}