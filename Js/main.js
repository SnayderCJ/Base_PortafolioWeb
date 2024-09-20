let menuVisible = false
// Funcion que oculta o muestra el menu 

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById('nav').classList = ''
        menuVisible = false
    } else {
        document.getElementById('nav').classList = 'sensibilidad'
        menuVisible = true
    }
}

function seleccionar(){
 // oculta el menu una vez que selecciono una opcion
 document.getElementById('nav').classList = ''
 menuVisible = false
}