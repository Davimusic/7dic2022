let mirar = ["`img1`", "`texto`", "`hijo`", "`video`", "`padre`", "`texto2`"]
//let info = "`casa!perro!loro!gato`"
let diccionario =  [    
                            {"img": {
                                "link": ["https://res.cloudinary.com/dplncudbq/image/upload/v1657473822/mias/red-304573_xrlhrp.png"],
                                "style": ["cursor: pointer;", "height: 100px;"],
                                "class": ["prueba"],
                                "eventos": [`onclick="eventoUnico(this.id, 'modalAtributos(${mirar[0]})')"`],
                                "id": [`img1`],
                                "animacion": [""]//pilas con el id, se le agrega un espacio de mas
                            }},
                            {"text": {
                                "texto": ["Lorem ipsum dolor sit amet."],
                                "style": ["cursor: pointer;", "padding: 2%;", "border-radius: 0.5em;", "color: white;"],
                                "class": [""],
                                "eventos": [`onclick="eventoUnico(this.id, 'modalAtributos(${mirar[1]})')"`],
                                "id": ["texto"],
                                "animacion": [""],
                                "tipo": [`h1`]
                            }},
                            {"div":{
                                "class": [""],
                                "id": ["hijo"], 
                                "eventos": [`onclick="eventoUnico(this.id, 'modalAtributos(${mirar[2]})')"`],
                                "style2": ["cursor: pointer;", "background: #17555571;", "border-radius: 0.5em;", "padding: 2%;", "height: min-content;", "width: 96%;"],
                                "animacion": [``],
                                "absorber": ["si"] 
                            }},
                            {"espacio":{
                                "espacios": ["2"]
                            }},
                            {"text": {
                                "texto": ["texto 2......w.w.w.w.w"],
                                "style": ["cursor: pointer;", "padding: 2%;", "border-radius: 0.5em;", "color: white;"],
                                "class": [""],
                                "eventos": [`onclick="eventoUnico(this.id, 'modalAtributos(${mirar[5]})')"`],
                                "id": ["texto2"],
                                "animacion": [""],
                                "tipo": [`h1`]
                            }},
                            {"video": {
                                "style": ["border-radius: 0.5em;", "height: 200px;", "width: 200px;"],
                                "class": [""],
                                "eventos": [`onclick="eventoUnico(this.id, 'modalAtributos(${mirar[3]})')"`],
                                "id": ["video"],
                                "animacion": [""],
                                "link": ["https://res.cloudinary.com/dplncudbq/video/upload/v1657988513/mias/y1_b0pxvc.mp4"]
                            }},
                            {"div": {
                                "class": [""],
                                "id": ["padre"], 
                                "eventos": [`onclick="eventoUnico(this.id, 'modalAtributos(${mirar[4]})')"`],
                                "style2": ["cursor: pointer;", "box-shadow: rgba(0, 0, 0, 0.75) 0px -1px 24px 0px;", "border-radius: 0.5em;", "padding: 2%;", "width: fit-content;", "height: fit-content;", "background: #1e7070;"],
                                "animacion": [``],
                                "absorber": ["si"]  
                            }},
                        ]

function traducirDiccionario(){
    let numHijo = 0;
    let arreDic = []
    let codigoInyectable = ""

    /*usarInformacion("img", "class", "retornar solo" , "primer")   
    usarInformacion("img", "class", "agregar", "lamadre")    
    usarInformacion("img", "class", "borrar", "prueba")  
    usarInformacion("img", "class", "retornar solo", "ultimo")*/
    usarInformacion("img", null,  "retornar todo")               

    for (let u = 0; u < diccionario.length; u++) {
        arreDic = []
        for (llavePrincipal in diccionario[u]) {
            arreDic.push([])
            for (llaveHija in diccionario[u][llavePrincipal]) {
                arreDic[0].push([])
                for (let i = 0; i < diccionario[u][llavePrincipal][llaveHija].length; i++) {
                    arreDic[0][numHijo].push(diccionario[u][llavePrincipal][llaveHija][i])    
                }
                numHijo += 1;
            }
            numHijo = 0;

            //console.log(codigoInyectable);
            if(llavePrincipal == "div"){
                codigoInyectable = decidirAccionArmadoComponents(llavePrincipal, arreDic, codigoInyectable)
            } else {
                codigoInyectable += decidirAccionArmadoComponents(llavePrincipal, arreDic, codigoInyectable)
            }            
        }
    }
    //console.log(codigoInyectable);
    return codigoInyectable 
}

function modalAtributos(bloqueID){
    let llavePrincipal = buscarBloque(bloqueID)
    //console.log(`llavePrincipal: ${llavePrincipal}, bloqueID: ${bloqueID}`);
    actualizarBloqueEnUso(bloqueID)

    let tipo = "", arrTitulos = [], arrContenidos = []
    let anchoWindow = ((parseInt(anchoVentana())/100) * 80) 

    let u = 0;
    for (tipoAUsar in diccionario[llavePrincipal]) {
        tipo = tipoAUsar
        for (tituloContenido in diccionario[llavePrincipal][tipoAUsar]) {
            arrTitulos.push(tituloContenido)
            arrContenidos.push([])
            for(contenidoFinal in diccionario[llavePrincipal][tipoAUsar][tituloContenido]){
                arrContenidos[u].push(diccionario[llavePrincipal][tipoAUsar][tituloContenido][contenidoFinal])
            }
            u += 1;
        }
    }

    console.log(`tipo: ${tipo}`);
    console.log(arrTitulos);
    console.log(arrContenidos);

    let text = ""
    for (let u = 0; u < arrTitulos.length; u++) {
        text += `<h1>${arrTitulos[u]}</h1>`
        for (let i = 0; i < arrContenidos[u].length; i++) {
            text += `<h3>${arrContenidos[u][i]}</h3>`
        }
    }

    let codArre = ``
    codArre += `
    <div style="padding: 2%; display:block; justify-content: space-between;"> 
            <div style="display:block;">`
        for (let u = 0; u < arrTitulos.length; u++) {
                codArre += `
                <div style="padding: 2%; border-radius: 0.5em; background: #1e7070; color:white;">
                    <div style="display:flex; justify-content: space-between;">
                        <h3>${arrTitulos[u]}</h3>
                        <img  style="border-radius: 50%; width: 50px; height: 50px;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597776/nuevo_dwrcbu.png">
                    </div>
                `
                for (let i = 0; i < arrContenidos[u].length; i++) {
                    let acc = "`", id=`${arrTitulos[u]}${i}`
                    codArre += `
                    <div style="display:flex; justify-content: space-between; padding: 2%; border-radius: 0.5em; width:${anchoWindow}px; background: #17555571;" id="${id}">
                        <input readonly style="" type="text" name=""  placeholder="${arrContenidos[u][i]}" id="accionContenidoEditar${i}">    
                        <div style="flex; justify-content: space-between;">
                            <img id="accionEditar${i}" onclick="eventoUnico(this.id, 'saludar(${acc}${arrContenidos[u][i]}${acc})-activarModificacion(${acc}accionContenidoEditar${i}${acc})')"  style="border-radius: 50%; width: 50px; height: 50px;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597779/editar_mfk2bi.png">
                            <img  style="border-radius: 50%; width: 50px; height: 50px;" src="https://res.cloudinary.com/dplncudbq/image/upload/v1669597775/borrar_yw19rd.png">
                        </div>
                    </div>
                    <br>`
                }
                codArre += `
                </div>
                <br>`
            }
		codArre += `
            </div>`
        codArre +=`
    </div>`
    ActivarModal(codArre)
}

function buscarBloque(bloqueID){
    //console.log(`desde buscarBloque, id: ${bloqueID}`);
    for (llavePrincipal in diccionario) {
        //console.log(llavePrincipal);
        for (llaveHija in diccionario[llavePrincipal]) {
            //console.log(diccionario[llavePrincipal][llaveHija]);
            //console.log(llaveHija);
            for (contenidoFinal in diccionario[llavePrincipal][llaveHija]) {
                //console.log(contenidoFinal);
                //console.log(diccionario[llavePrincipal][llaveHija][contenidoFinal]);
                if(diccionario[llavePrincipal][llaveHija][contenidoFinal] == bloqueID){
                    //console.log("entra");
                    //console.log(llavePrincipal);
                    return llavePrincipal
                }
            }
        }
    }
}

function usarInformacion(llavePrincipal, llaveHija, acc, info){  
    if(acc == "retornar solo"){
        console.log(`${diccionario[0][llavePrincipal][llaveHija]}`);
    } else if(acc == "agregar"){
        diccionario[0][llavePrincipal][llaveHija].push(info)
    } else if(acc == "borrar"){
        let arre = diccionario[0][llavePrincipal][llaveHija]
        for (let u = 0; u < arre.length; u++) {
            if(arre[u] == info){
                arre[u] = ""// buscar que lo borre, mas no lo reescriba
            }
        }
    } else if(acc == "retornar todo"){
        //console.log("entra");
        //console.log(diccionario[0][llavePrincipal]);// el cero a futuro serà el id se cada seccion o componente

    }  
    //console.log(`${diccionario[0][llavePrincipal][llaveHija]}`);  
}

function decidirAccionArmadoComponents(llavePrincipal, arreDic, codigoInyectable){
    if(llavePrincipal == "text"){
        let textoPaso = `${descomponerArreglo(arreDic[0][0])}`
        let style = `style = "${descomponerArreglo(arreDic[0][1])}"`
        let clase = `class = "${descomponerArreglo(arreDic[0][2])}"`
        let eventos =  `${descomponerArreglo(arreDic[0][3])}` 
        let id = `id = "${descomponerArreglo(arreDic[0][4])}"` 
        let animation = `${descomponerArreglo(arreDic[0][5])}`
        let tipo = `${descomponerArreglo(arreDic[0][6])}`
        let concatenado = `${id} ${style} ${clase} ${eventos} ${animation}`
        //console.log(`${texto(tipo, concatenado, textoPaso)}`);
        return texto(tipo, concatenado, textoPaso)
        //console.log(codigoInyectable);
    }
    if(llavePrincipal == "img"){
        return imagen(arreDic[0][0], arreDic[0][1], arreDic[0][2], arreDic[0][3], arreDic[0][4], arreDic[0][5])
    } 
    if(llavePrincipal == "div"){
        let clase = `class = "${descomponerArreglo(arreDic[0][0])}"`
        let id = `id = "${descomponerArreglo(arreDic[0][1])}"` 
        let eventos =  `${descomponerArreglo(arreDic[0][2])}` 
        let style = `style = "${descomponerArreglo(arreDic[0][3])}"`
        let animation = `${descomponerArreglo(arreDic[0][4])}`
        let accion = `${descomponerArreglo(arreDic[0][5])}`
        let concatenado = `${id} ${clase} ${eventos} ${style} ${animation}`
        return  div(concatenado, codigoInyectable, accion)// pilas que en este el codigo inyectable anterior ya proviene junto con la funcion "div"
        //codigoInyectable = div(concatenado, codigoInyectable, accion)// pilas que en este el codigo inyectable anterior ya proviene junto con la funcion "div"
        //console.log(codigoInyectable);
    }
    if(llavePrincipal == "video"){
        let style = `style = "${descomponerArreglo(arreDic[0][0])}"`
        let clase = `class = "${descomponerArreglo(arreDic[0][1])}"`
        let eventos =  `${descomponerArreglo(arreDic[0][2])}` 
        let id = `id = "${quitarEspacioInicial(descomponerArreglo(arreDic[0][3]))}"` 
        let animation = `${descomponerArreglo(arreDic[0][4])}`
        let link = `${descomponerArreglo(arreDic[0][5])}`
        let concatenado = `${id} ${clase} ${eventos} ${style} ${animation}`
        return video(concatenado, link)
        //console.log(`mirar el div ` + video(concatenado, link));
        //console.log(`mirar bro ` + codigoInyectable);
    }
    if(llavePrincipal == "espacio"){
        let num = `${descomponerArreglo(arreDic[0][0])}`
        return espacio(num)
    }
}
