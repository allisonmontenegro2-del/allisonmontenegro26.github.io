document.addEventListener('DOMContentLoaded', () => {

    const botones = document.querySelectorAll('.toggle-info-btn');
    botones.forEach(boton => {

      boton.addEventListener('click', () => {
        const carta = boton.closest('.carta');
            const descripcion
             = carta.querySelector('.descripcion');
            if (descripcion){

                descripcion.classList.toggle('visible');
                if (boton.textContent === '+info') {

                    boton.textContent = '-info';
                }else{
                    
                    boton.textContent = '+info';
                }
            }
        });
    });
});