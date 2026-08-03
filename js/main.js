'use strict';

document.addEventListener(
    'DOMContentLoaded',
    initApplication
);

function initApplication(){

    initializeSite();

    // Hora en que se cargó el formulario
    window.formLoadedTime = Date.now();
    lucide.createIcons();

}

function initializeSite(){
    console.info(
        '%cErasmoParraguez.com',
        'color:#0B5FFF;font-weight:700;font-size:14px;'
    );

    console.info('Version 1.1 initialized.');

}

