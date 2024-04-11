
//import {owners} from './data/heroes'
import superHeroes from "../data/heroes"


//getHeroById (id)
//funciones de flecha
//find

 const getHeroById = (id1) => superHeroes.find((superHeroes) => superHeroes.id === id1);


//getHeroByOwner ('DC','Marvel')
//[]
 const getHeroByOwner= (owner) => superHeroes.filter((superHeroes) => superHeroes.owner === owner);

 export {getHeroById,getHeroByOwner};

/*
 import {getHeroById,getHeroByOwner} from "./bases/08-imp-exp";

console.log(getHeroById(1))
console.log(getHeroByOwner('DC'))*/


