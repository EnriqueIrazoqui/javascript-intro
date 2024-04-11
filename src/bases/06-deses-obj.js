const person = {
    name: "Tony",
    age: 45,
    codeName: "Ironman"
}

const {name,age,codeName, power="No tiene poderes"} = person

/*console.log(name)
console.log(age)
console.log(codeName)
console.log(power)*/

const createHero = ({name,age,codeName,power}) =>({
        id: 112345667,
        name,
        age,
        power
})

console.log(createHero(person))