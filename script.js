    let mainTitle=document.querySelector('.number-box b');
    let rbutton = document.getElementById('rButton');
    let cbutton = document.getElementById('cButton');

    let numberOfClicks=0
    rbutton.addEventListener('click', function reset() {
        mainTitle.textContent =numberOfClicks
        });
    function reset () {
    numberOfClicks=0;
    }

    cbutton.addEventListener('click', function click(){
        mainTitle.textContent =numberOfClicks

    });

    function click(){
        numberOfClicks=numberOfClicks+1 
    }
