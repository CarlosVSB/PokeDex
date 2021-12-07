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

var loadscreen = document.querySelector('.load')
var load = document.querySelector('.loading')

function load2(){
    load.classList.add('show')
    loadscreen.classList.add('show')
    buscar()
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

function altura2(){
    var res = document.querySelector('section.sobre')
    var foot = document.querySelector('footer')
    var pos =window.innerHeight
    var pos2 = foot.getBoundingClientRect()
    var pos3 = res.getBoundingClientRect()
    // console.log(pos)
    res.style.minHeight = `${pos-pos2.bottom+(pos3.bottom-pos3.top)}px`
}

function altura3(){
    var res = document.querySelector('section.contato')
    var foot = document.querySelector('footer')
    var pos =window.innerHeight
    var pos2 = foot.getBoundingClientRect()
    var pos3 = res.getBoundingClientRect()
    // console.log(pos)
    res.style.minHeight = `${pos-pos2.bottom+(pos3.bottom-pos3.top)}px`
}


async function buscar(){
    var res = document.querySelector('div.res')
    res.innerHTML = ''
    var i = document.querySelector('input.nome')
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i.value.toLowerCase()}`)
    
    console.log(response.status )
    if(response.status != 200){
        alert("ERRO! pokemon não encontrado, tente novamente, se o problema persistir volte mais tarde ou entre em contato.")
    }else{
        const jeison = await response.json()
        // console.log(jeison)
        let pokemon = jeison
        let imagem = document.createElement('img')
        let imagem2 = document.createElement('img')
        let nome = document.createElement('p')
        let tipo1 = document.createElement('p')
        let num = document.createElement('p')
        imagem.setAttribute('src',pokemon.sprites.front_default)
        imagem.setAttribute('class','sprite')
        imagem2.setAttribute('src',pokemon.sprites.front_shiny)
        imagem2.setAttribute('class','sprite2')
        nome.innerText = pokemon.name
        nome.innerText = nome.innerText.charAt(0).toUpperCase() + nome.innerText.slice(1)
        nome.setAttribute('class','nome')
        tipo1.innerText = pokemon.types[0].type.name
        tipo1.setAttribute('class','tipo1')
        tipo1.style.backgroundColor = tipos[tipo1.innerText]
        num.innerText = `#${pokemon.id}`
        num.setAttribute('class','num')
        // divisoria.setAttribute('class','entrada')
        res.appendChild(imagem)
        res.appendChild(imagem2)
        res.appendChild(nome)
        res.appendChild(num)
        res.appendChild(tipo1)
        if(pokemon.types.length > 1){
            let tipo2 = document.createElement('p')
            tipo2.innerText = pokemon.types[1].type.name
            tipo2.setAttribute('class','tipo2')
            tipo2.style.backgroundColor = tipos[tipo2.innerText]
            res.appendChild(tipo2)
        }
        poke = jeison
        var divisoria = document.createElement('div')
        divisoria.setAttribute('id','teste')
        let hp = document.createElement('p')
        hp.innerText = `${poke.stats[0].base_stat}`
        hp.setAttribute('class','status')
        hp.style.width = `${poke.stats[0].base_stat}px`
        let atk = document.createElement('p')
        atk.innerText = `${poke.stats[1].base_stat}`
        atk.setAttribute('class','status')
        atk.style.width = `${poke.stats[1].base_stat}px`
        let def = document.createElement('p')
        def.innerText = `${poke.stats[2].base_stat}`
        def.setAttribute('class','status')
        def.style.width = `${poke.stats[2].base_stat}px`
        let spat = document.createElement('p')
        spat.innerText = `${poke.stats[3].base_stat}`
        spat.setAttribute('class','status')
        spat.style.width = `${poke.stats[3].base_stat}px`
        let spdef = document.createElement('p')
        spdef.innerText = `${poke.stats[4].base_stat}`
        spdef.setAttribute('class','status')
        spdef.style.width = `${poke.stats[4].base_stat}px`
        let spd = document.createElement('p')
        spd.innerText = `${poke.stats[5].base_stat}`
        spd.setAttribute('class','status')
        spd.style.width = `${poke.stats[5].base_stat}px`
        divisoria.innerHTML = `<p>Status base</p> <p><=230</p>`
        divisoria.appendChild(hp)
        divisoria.innerHTML += `<p>Vida</p>`
        divisoria.appendChild(atk)
        divisoria.innerHTML += `<p>Ataque</p>`
        divisoria.appendChild(def)
        divisoria.innerHTML += `<p>Defesa</p>`
        divisoria.appendChild(spat)
        divisoria.innerHTML += `<p>Sp.At.</p>`
        divisoria.appendChild(spdef)
        divisoria.innerHTML += `<p>Sp.Def.</p>`
        divisoria.appendChild(spd)
        divisoria.innerHTML += `<p>Speed</p>`
        res.appendChild(divisoria)
    }
    load.classList.remove('show')
    loadscreen.classList.remove('show')
}