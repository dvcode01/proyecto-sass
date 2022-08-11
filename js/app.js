// Variables y Selectores 
const btnSwitch = document.getElementById('switch');

// Eventos
eventListeners();
function eventListeners(){
    btnSwitch.addEventListener('click', toggleMode);
}

// funciones
function toggleMode(){
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    if(document.body.classList.contains('dark')){
        localStorage.setItem('Dark-Mode', 'true');
    }else{
        localStorage.setItem('Dark-Mode', 'false');
    }
}

if(localStorage.getItem('Dark-Mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}