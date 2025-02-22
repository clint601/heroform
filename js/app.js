let count = 1

class hero {
    constructor(heroName, role, power,) {
        this.info = {
            id: count,
            heroName,
            role,
            power
        }
    }
    getDescription(heroName, role, power) {
        return `My name is ${heroName} my role is ${role} And my super powers is ${power}.`
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let obj = {}
    obj = { ...getInfo()}
    const heros = new hero(obj.heroName, obj.role, obj.power)
    count++
    buildCard(hero.info, hero.getDescription)
})

const getInfo =()=> {
    const heroName = document.getElementById('heroName').value
    const role = document.getElementById('role').value
    const power = document.querySelector('input[name="power"]:checked')

    return { heroName, role, power, }
}

const buildCard = (obj, func) => {
    const row = document.getElementById('cardRow')

    const column = document.createElement('div')
    column.classList.add('col')
    
    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const heroName = document.createElement('h2')
    heroName.classList.add('card-text', 'text-capitalize')
    heroName.innerText = obj.heroName

    const role = document.createElement('p')
    role.classList.add('card-text', 'text-capitalize')
    role.innerText = `Role: ${obj.role}`

    const power = document.createElement('p')
    power.classList.add('card-text', 'text-capitalize')
    power.innerText = `Power: ${obj.power}`

    const description = document.createElement('p')
    description.classList.add('card-text', 'fst-italic')
    description.innerText = func(obj.heroName, obj.role, obj.power)

    cardBody.appendChild(heroName)
    cardBody.appendChild(role)
    cardBody.appendChild(power)
    cardBody.append(description)

    card.appendChild(cardBody)

    column.appendChild(card)

    row.appendChild(column)


}