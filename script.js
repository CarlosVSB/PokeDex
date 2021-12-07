
// function consultarPokemon(id) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(function (response) {
//         response.json()
//         .then(function (pokemon) {
//             adicionaPokemon(pokemon)
//         })
//     })
// }

var tipos={
    "grass": "#3bad37",
    "bug" : "#0abd04",
    "dark" : "#2d2e2d",
    "dragon" : "#608ba3",
    "electric" : "#c1f23a",
    "fairy" : "#f01ae5",
    "fighting" : "#962121",
    "fire" : "#d10000",
    "flying" : "#4892bd",
    "ghost" : "#4f2bab",
    "ground" : "#916c2a",
    "ice" : "#36968b",
    "normal" : "#ad6531",
    "poison" : "#653e7d",
    "psychic" : "#bd62bd",
    "rock" : "#a35727",
    "steel" : "#636363",
    "water" : "#0a35c4"
}

var atual = 1

async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const jeison = await response.json()
    // console.log(jeison)
    return jeison
}


window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight ) {
        // window.removeEventListener('scroll')
        // iniciar()
        loading()
    }
})

var loadscreen = document.querySelector('.load')
var load = document.querySelector('.loading')

function loading(){
    load.classList.add('show')
    loadscreen.classList.add('show')
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    iniciar()
    document.getElementsByTagName('body')[0].style.overflow = 'visible'
}



async function iniciar() {
    let poke = 0
    let i = 1
    for(i = atual; i <= atual+19 ;i++){
        if(i>898){
            break
        }
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const jeison = await response.json()
        poke = getPokemon(i)
        // js.then(response => 
        adicionaPokemon(jeison,i)
        // )
    }
    atual = i
    load.classList.remove('show')
    loadscreen.classList.remove('show')
}



function adicionaPokemon(pokemon,i) {
    let dex = document.getElementsByClassName('dex')[0]
    let divisoria = document.createElement('div')
    let imagem = document.createElement('img')
    let nome = document.createElement('p')
    let tipo1 = document.createElement('p')
    let num = document.createElement('p')
    imagem.setAttribute('src',pokemon.sprites.front_default)
    imagem.setAttribute('class','fot')
    nome.innerText = pokemon.name
    nome.innerText = nome.innerText.charAt(0).toUpperCase() + nome.innerText.slice(1)
    nome.setAttribute('class','nome')
    tipo1.innerText = pokemon.types[0].type.name
    tipo1.setAttribute('class','tipo1')
    divisoria.style.backgroundColor = tipos[tipo1.innerText]
    tipo1.style.backgroundColor = tipos[tipo1.innerText]
    num.innerText = `#${i}`
    num.setAttribute('class','num')
    divisoria.setAttribute('class','entrada')
    divisoria.appendChild(imagem)
    divisoria.appendChild(nome)
    divisoria.appendChild(num)
    divisoria.appendChild(tipo1)
    if(pokemon.types.length > 1){
        let tipo2 = document.createElement('p')
        tipo2.innerText = pokemon.types[1].type.name
        tipo2.setAttribute('class','tipo2')
        tipo2.style.backgroundColor = tipos[tipo2.innerText]
        divisoria.appendChild(tipo2)
    }
    dex.appendChild(divisoria)
}

function altura(){
    var res = document.querySelector('div.res')
    var foot = document.querySelector('footer')
    var pos =window.innerHeight
    var pos2 = foot.getBoundingClientRect()
    var pos3 = res.getBoundingClientRect()
    // console.log(pos)
    res.style.minHeight = `${pos-pos2.bottom+(pos3.bottom-pos3.top)}px`
}

