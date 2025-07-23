const   $btnIniciarSesion =document.querySelector('.iniciarSesion-btn'),
        $btnRegistrarse = document.querySelector('.registrarSesion-btn'),
        $registrarSesion = document.querySelector('.resgistrarseSesion'),
        $iniciarSecion = document.querySelector('.iniciarSesion');

document.addEventListener('click', e=> {
    if(e.target === $btnIniciarSesion || e.target === $btnRegistrarse){
        $iniciarSecion.classList.toggle('activa');
        $registrarSesion.classList.toggle('activa')
    }
})

