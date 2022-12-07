let arr = [['imagen', 'https://res.cloudinary.com/dplncudbq/image/upload/v1658015902/mias/i1_ndc8ga.png'],['#home', 'Ingresos'],['#home2', 'vista ingresos anual'], ['#home3', 'vista ingresos mensual'], ['#home4', 'Egresos'], ['#home', 'vista egresos anaul'],['#home2', 'vista egresos mensual'],['', '']]

function menu(){
    //let menuID = document.getElementById("menu");
    let divPadre = document.getElementById("padreMenu")
    divPadre.style.height = `${window.innerHeight}px`
    divPadre.style.overflow = "scroll";
    //divPadre.style.background = "red"
    let anchoPantalla = window.innerWidth;
    let cod = "", display = "", anchoAUsar = "", clasEsconder = "", eventoMenuCelular = "";
    let alturaMenu = 30;

    if(anchoPantalla <= 640){
        display = "block"
        anchoAUsar = `style= "height: 0px;"`
        clasEsconder = "none"
        eventoMenuCelular = 'onclick="menuCelular()"'
    } else {
        console.log(anchoPantalla);
        display = "flex"
    }
    
    cod += 
    `
    <div id="menuDesplegable"  class="sticky sobresalir color1 contenedorGaleria" ${anchoAUsar}>
        <ul class="${display} espacioEquilatero ListaLimpia">
    `
        for (let i = 0; i < arr.length; i++) {
            if(arr[i][0] != 'imagen'){
                cod +=`    
                <li class='${clasEsconder} textoMenu'><a class='ListaLimpia' href="${arr[i][0]}">${arr[i][1]}</a></li>
                `
            } else {
                cod +=`    
                <li class=''><img ${eventoMenuCelular} style="height: ${alturaMenu - 5}px;" src="${arr[i][1]}" alt="" ></li>
                `
            }
        }
    cod += 
    ` 
        </ul>
    </div>
    `
    return cod;
    //console.log(cod);
    //menuID.innerHTML = cod;
}

let bandera = 0
function menuCelular(){
    let alturaPantalla = window.innerHeight;
    let menu = document.getElementById("menuDesplegable")

    menu.style.transition = "0.5s";
    if(bandera  == 0 ){
        bandera = 1
        menu.style.height = `${alturaPantalla}px`
        setTimeout(mostrarTextoMenu, 600);
    } else {
        bandera = 0
        menu.style.height = `0px` //sacado de la altura que queda al renderizar en modo Movil
        mostrarTextoMenu("cerrar")
    }
}

function mostrarTextoMenu(acc){
    let arreglo = document.getElementsByClassName("textoMenu"); //arrojada por la variable clasEsconder
    for (let i = 0; i < arreglo.length; i++) {
        if(acc == "cerrar"  || bandera == 0){
            arreglo[i].classList.replace("flex", "none")
        } else {
            arreglo[i].classList.replace("none", "flex")
        }
    }
}