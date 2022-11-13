let bg = document.querySelectorAll('.mouse-parallax-bg');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        bg[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });    
}


function goTo(href){
    window.location.href =  href;
}


function animateRocket(){
    let rocket = document.querySelector('.goUp');
    rocket.style.transition = 'all 1s ease-in-out';
    rocket.style.bottom = '100%';
    

    setTimeout(function(){
        rocket.style.transition = 'all .1s ease-in-out';
        rocket.style.bottom = '40px';
    }, 1000);
}


function imageFullScreen(el){
    let div_image = document.createElement('div');
    div_image.classList.add('image-full-screen');
    path = el.src;
    div_image.style.transition = 'all .5s ease-in-out';
    div_image.style.backgroundImage = 'url(' + path + ')';
    div_image.style.backgroundSize = 'contain';
    div_image.style.backgroundRepeat = 'no-repeat';
    div_image.style.backgroundPosition = 'center';
    div_image.style.position = 'fixed';
    div_image.style.top = '0';
    div_image.style.left = '0';
    div_image.style.width = '100%';
    div_image.style.height = '100%';
    div_image.style.zIndex = '10000'

    let blur = document.createElement('div');
    blur.classList.add('blur');
    blur.style.transition = 'all .5s ease-in-out';
    blur.style.position = 'fixed';
    blur.style.top = '0';
    blur.style.left = '0';
    blur.style.width = '100%';
    blur.style.height = '100%';
    blur.style.background = 'rgba(0,0,0,.5)';
    blur.style.zIndex = '1000';

    document.body.appendChild(blur);

    document.body.appendChild(div_image);
    div_image.addEventListener('click', function(){
        div_image.remove();
        blur.remove();
    });
}


function uncheckBurger(){
    let toggle = document.getElementById('toggle');
    console.log("toggle state "+ toggle.checked);
    toggle.checked = false;
}

function switchISS3dState(){
    let iss3d = document.getElementById('iss-3d');
    if(iss3d.style.display === 'block'){
        iss3d.style.display = 'none';
    }else{
        iss3d.style.display = 'block';
    }
}