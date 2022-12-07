let bloqueEnUso = "sin activar";

function actualizarBloqueEnUso(text){
    bloqueEnUso = text
    //console.log(`bloqueEnUso: ${bloqueEnUso}`);
}

function ActivarModal(contenido){
    if(bloqueEnUso == "sin activar"){
        alert("elija bloque")
    } else {
		if(contenido != undefined){
			document.getElementById("root").innerHTML = modal(contenido)
        	setTimeout(actualizarModal, 100)
		} 
    }
}

function actualizarModal(){
	let idModal = document.getElementById("modala");
	idModal.style.display = "block";
    setTimeout(mostrarModal, 100)
}
function mostrarModal(){
	let idModal = document.getElementById("modala");
	idModal.style.boxShadow = "0px -1px 24px 0px rgba(0,0,0,0.75)";
	idModal.style.height = "fit-content";
	idModal.style.opacity = "1";
	idModal.style.transition = "1s";
}


function desactivarModal(){
	let idModal = document.getElementById("modala");
	idModal.style.transition = "1s";
	idModal.style.height = "0px";
	idModal.style.opacity = "0";
	setTimeout(esconderModal, 500)
}
function esconderModal(){
	let idModal = document.getElementById("modala");
	idModal.style.display = "none";
}


function modal(contenido){
	let conte = ""

	if(contenido != undefined){
		conte = contenido
		//console.log("entra modal");
		//console.log(conte);
	} 

	/*let arreAcciones = ["Agregar", "Eliminar" ]
	let arre = ["div", "texto", "slide galery", "imagen", "reproductor de audio"]
	let codArre = ``
	for (let i = 0; i < arreAcciones.length; i++) {
		codArre += `<div style="padding: 2%; display:flex; justify-content: space-between;>`
		for (let u = 0; u < arre.length; u++) {
			let acc = 'saludar(`'+ arreAcciones[i] +' a: ' + arre[u] + '`)'
			codArre += `<button id="${arreAcciones[i]}${arre[u]}" onclick="eventoUnico(this.id, 'click', '${acc}')">${arreAcciones[i]} ${arre[u]}</button>`
		}
		codArre += "</div>"
	}*/
	
	cod = `
	<div style = "background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(5px); display: none; padding: 2%; opacity: 0; height: 0px" id="modala">
		<header style = "position: sticky; top: 0; padding: 2%; background: #1e7070; display:flex; justify-content: space-between;">
			<div style="display:flex; justify-content: space-between;">
				<div> ¡Bienvenido Davis! </div>
			</div>
			<div>
				<button onclick="saludar('desde modal bro ${bloqueEnUso}')">Evento</button>
			</div>
			<div style="justify-content: left;" onclick="desactivarModal()" >
					X
			</div>
		</header>
		<div class="">
                <h3>Usando bloque de: ${bloqueEnUso}</h3>
				${conte}
				<p>Agregar un mensaje</p>
				<img style = "width: 30px; height: 30px" src="https://res.cloudinary.com/dplncudbq/image/upload/v1658015902/mias/i1_ndc8ga.png" alt="">
		</div>
	</div>
	`
    return cod
}

function saludar(text){
	alert(text);
}

function activarModificacion(id){
	document.getElementById(id).readOnly = false;
}