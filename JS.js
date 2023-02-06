const container = document.querySelectorAll('.slide')

for (const div of container){
    div.addEventListener('click', function(){
        removeClass()
        div.classList.add('clickDiv');
    })
}

function removeClass(){
    for(const div of container){
        div.classList.remove('clickDiv')
    }
}

