let popped = 0;

document.addEventListener('mouseover', function(e){
    if (e.target.className === "circle") {
        e.target.style.backgroundColor = "lightcoral";
        e.target.textContent = "Got 'em";
        popped++;
        removeEvent(e);
        checkAllPopped();
    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover',function(){

    })
};

function checkAllPopped() {
    if(popped === 20){
        let gallery = document.querySelector('#circle-gallery');
        let message = document.querySelector('#no-circles');
        gallery.innerHTML = '';
        message.style.display = 'block';

    }
};
