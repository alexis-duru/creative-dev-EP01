// je pars en mode dark //

const slider = document.querySelector('.slider');

slider.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        // toggleSwitch.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){
        body.classList.add('dark')
        body.classList.remove('light')
        // toggleSwitch.innerHTML = "Go Light"
    } 
    console.log(body.classList)
        
})
