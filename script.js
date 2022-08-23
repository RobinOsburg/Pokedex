let currentPokemon;




async function loadPokemon(){
    let url= 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon  = await response.json();

    console.log('Loaded pokemon', currentPokemon);

    renderPokemonInfo();

}

function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeImg').src = currentPokemon['sprites']['front_default'];
    document.getElementById('hp').innerHTML += currentPokemon['stats']['0']['stat']['name'] ;
    document.getElementById('number1').innerHTML += currentPokemon['stats']['0']['base_stat'];
    document.getElementById('attack').innerHTML += currentPokemon['stats']['1']['stat']['name'];
    document.getElementById('number2').innerHTML += currentPokemon['stats']['1']['base_stat']; 
    document.getElementById('defense').innerHTML += currentPokemon['stats']['2']['stat']['name'];
    document.getElementById('number3').innerHTML += currentPokemon['stats']['2']['base_stat']; 
    document.getElementById('special_attack').innerHTML += currentPokemon['stats']['3']['stat']['name']; 
    document.getElementById('number4').innerHTML += currentPokemon['stats']['3']['base_stat'];
    document.getElementById('special_defense').innerHTML += currentPokemon['stats']['4']['stat']['name']; 
    document.getElementById('number5').innerHTML += currentPokemon['stats']['4']['base_stat'];
    document.getElementById('speed').innerHTML += currentPokemon['stats']['5']['stat']['name'] ;
    document.getElementById('number6').innerHTML += currentPokemon['stats']['5']['base_stat'];
 
}

function showBar(){
    document.getElementById('bar_1').style.width = currentPokemon['stats']['0']['base_stat']; 
}
