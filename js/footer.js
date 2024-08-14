document.addEventListener('DOMContentLoaded', ()=>{
    // Funcion para obetener el año actual
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    document.querySelector('#current-year').textContent = getCurrentYear();
})