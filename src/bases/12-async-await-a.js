const miPromesa = () =>{
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //resolve("Tenemos un valor en la promesa")
            reject("Reject en mi promesa")
        }, 1000);
    })
}

const medirTiempoAsync = async() =>{

    try {
        console.log("Inicio")

        const respuesta = await miPromesa()
        console.log(respuesta)
        
        
         console.log("Fin")

         return "fin de medir tiempo async"
        
    } catch (error) {

        return "catch en medir TiempoAsync"
        
    //throw "Error en medir tiempo async"
        
    }
   

    //throw "Error en medir tiempo async"

}


medirTiempoAsync()
.then(valor => console.log("Then exitoso: ",valor))
.catch(err => console.log("error:",err))
