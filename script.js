let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('Loaded pokemon', currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo() {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokeImg').src = currentPokemon['sprites']['front_default'];
    document.getElementById('hp').innerHTML += currentPokemon['stats']['0']['stat']['name'];
    document.getElementById('number1').innerHTML += currentPokemon['stats']['0']['base_stat'];
    document.getElementById('attack').innerHTML += currentPokemon['stats']['1']['stat']['name'];
    document.getElementById('number2').innerHTML += currentPokemon['stats']['1']['base_stat'];
    document.getElementById('defense').innerHTML += currentPokemon['stats']['2']['stat']['name'];
    document.getElementById('number3').innerHTML += currentPokemon['stats']['2']['base_stat'];
    document.getElementById('special_attack').innerHTML += currentPokemon['stats']['3']['stat']['name'];
    document.getElementById('number4').innerHTML += currentPokemon['stats']['3']['base_stat'];
    document.getElementById('special_defense').innerHTML += currentPokemon['stats']['4']['stat']['name'];
    document.getElementById('number5').innerHTML += currentPokemon['stats']['4']['base_stat'];
    document.getElementById('speed').innerHTML += currentPokemon['stats']['5']['stat']['name'];
    document.getElementById('number6').innerHTML += currentPokemon['stats']['5']['base_stat'];

    showMoreInfo();
    showBar();
}

function showMoreInfo() {
    document.getElementById('moreInfo_1').innerHTML += currentPokemon['types']['0']['type']['name'];
    document.getElementById('moreInfo_2').innerHTML += currentPokemon['height'];
    document.getElementById('moreInfo_3').innerHTML += currentPokemon['weight'];

}

function showBar() {
    document.getElementById('bar_1').style = `width: ${currentPokemon['stats']['0']['base_stat']}%`;
    document.getElementById('bar_2').style = `width: ${currentPokemon['stats']['1']['base_stat']}%`;
    document.getElementById('bar_3').style = `width: ${currentPokemon['stats']['2']['base_stat']}%`;
    document.getElementById('bar_4').style = `width: ${currentPokemon['stats']['3']['base_stat']}%`;
    document.getElementById('bar_5').style = `width: ${currentPokemon['stats']['4']['base_stat']}%`;
    document.getElementById('bar_6').style = `width: ${currentPokemon['stats']['5']['base_stat']}%`;
}


