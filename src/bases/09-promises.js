import {getHeroById} from "./08-imp-exp"
/*console.log("Inicio")

new Promise((resolve,reject)=>{

    console.log("Cuerpo de la promesa")
    reject("Promesa resulta")

}).then(console.log) 
.catch(console.log)


console.log("Fin")*/


const getHeroByIdAsync = (id) =>{
    return new Promise((resolve,rejected)=> {
        setTimeout(()=>{
            const hero = getHeroById(id)

            if(hero){
                resolve(hero)
            }else{
                rejected("Heroe no existe")
            }

            resolve(hero)
        },1000);
    });
}

getHeroByIdAsync(100)
.then(h => {console.log(`El heroe es: ${h.name}`)})
.catch(console.log)