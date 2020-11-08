let hr = document.getElementsByClassName('select');

hr[0].style.color = 'silver';

hr[0].addEventListener('click',function(){
    hr[0].style.color = 'silver';
    hr[1].style.color = 'black';
    hr[2].style.color = 'black';
    hr[3].style.color = 'black';
    hr[4].style.color = 'black';
    hr[5].style.color = 'black';
});

hr[1].addEventListener('click',function(){
    hr[1].style.color = 'silver';
    hr[0].style.color = 'black';
    hr[2].style.color = 'black';
    hr[3].style.color = 'black';
    hr[4].style.color = 'black';
    hr[5].style.color = 'black';
});

hr[2].addEventListener('click',function(){
    hr[2].style.color = 'silver';
    hr[0].style.color = 'black';
    hr[1].style.color = 'black';
    hr[3].style.color = 'black';
    hr[4].style.color = 'black';
    hr[5].style.color = 'black';
});

hr[3].addEventListener('click',function(){
    hr[3].style.color = 'silver';
    hr[0].style.color = 'black';
    hr[2].style.color = 'black';
    hr[1].style.color = 'black';
    hr[4].style.color = 'black';
    hr[5].style.color = 'black';
});

hr[4].addEventListener('click',function(){
    hr[4].style.color = 'silver';
    hr[0].style.color = 'black';
    hr[2].style.color = 'black';
    hr[3].style.color = 'black';
    hr[1].style.color = 'black';
    hr[5].style.color = 'black';
});

hr[5].addEventListener('click',function(){
    hr[5].style.color = 'silver';
    hr[0].style.color = 'black';
    hr[2].style.color = 'black';
    hr[3].style.color = 'black';
    hr[4].style.color = 'black';
    hr[1].style.color = 'black';
});