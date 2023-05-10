let allPokemon = [];
let start = 31;

async function loadPokemon(i) {
  let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  let response = await fetch(url);
  let responsAsJson = await response.json();
  allPokemon.push(await responsAsJson);
  showPokemons();
  console.log(allPokemon);
}

async function init() {
  for (let i = 1; i <= 30; i++) {
    await loadPokemon(i);
  }
}

function showPokemons() {
  document.getElementById('mainContainer').innerHTML ='';
  for (let i = 0; i < allPokemon.length; i++) {
   document.getElementById('mainContainer').innerHTML+=renderPokemons(i);
  }
}

function renderPokemons(i){
  let name = allPokemon[i]['name'];
  let img = allPokemon[i].sprites.other["official-artwork"].front_default;
  let type = allPokemon[i]['types']['0']['type']['name'];
  let typeImg = `img/${type}.png`
  let color = allPokemon[i]['types']['0']['type']['name'];
  return `
  <div onclick="renderPokemonInfo(${i})" class="${color} pokedex" >
      <span><p>${name}</p></span>
      <img src ="${img}">
      <div class="typeBorder"><p>${type} </p><img src="${typeImg}"></div>
      
    </div>
  `;
}

function renderPokemonInfo(i) {

  document.getElementById('backGround').classList.remove('d-none');
  document.getElementById('pokemonName').innerHTML = allPokemon[i]['name'];
  document.getElementById('pokeImg').src = allPokemon[i].sprites.other["official-artwork"].front_default;
  document.getElementById('hp').innerHTML = allPokemon[i]['stats']['0']['stat']['name'];
  document.getElementById('number1').innerHTML = allPokemon[i]['stats']['0']['base_stat'];
  document.getElementById('attack').innerHTML = allPokemon[i]['stats']['1']['stat']['name'];
  document.getElementById('number2').innerHTML = allPokemon[i]['stats']['1']['base_stat'];
  document.getElementById('defense').innerHTML = allPokemon[i]['stats']['2']['stat']['name'];
  document.getElementById('number3').innerHTML = allPokemon[i]['stats']['2']['base_stat'];
  document.getElementById('special_attack').innerHTML = allPokemon[i]['stats']['3']['stat']['name'];
  document.getElementById('number4').innerHTML = allPokemon[i]['stats']['3']['base_stat'];
  document.getElementById('special_defense').innerHTML = allPokemon[i]['stats']['4']['stat']['name'];
  document.getElementById('number5').innerHTML = allPokemon[i]['stats']['4']['base_stat'];
  document.getElementById('speed').innerHTML = allPokemon[i]['stats']['5']['stat']['name'];
  document.getElementById('number6').innerHTML = allPokemon[i]['stats']['5']['base_stat'];

  checkBackgroundcolor(i);
  showMoreInfo(i);
  showBar(i);
}

function showMoreInfo(i) {
  let type = allPokemon[i]['types']['0']['type']['name'];
  let height = allPokemon[i]['height'];
  let weight = allPokemon[i]['weight'];

  document.getElementById('moreInfo_1').innerHTML = `<b>Type:&nbsp;${type}</b>`;
  document.getElementById('moreInfo_2').innerHTML = `<b>Height:&nbsp;${height}</b>`;
  document.getElementById('moreInfo_3').innerHTML = `<b>Weight:&nbsp;${weight}</b>`;
}

function showBar(i) {
  document.getElementById('bar_1').style = `width: ${allPokemon[i]['stats']['0']['base_stat']}%`;
  document.getElementById('bar_2').style = `width: ${allPokemon[i]['stats']['1']['base_stat']}%`;
  document.getElementById('bar_3').style = `width: ${allPokemon[i]['stats']['2']['base_stat']}%`;
  document.getElementById('bar_4').style = `width: ${allPokemon[i]['stats']['3']['base_stat']}%`;
  document.getElementById('bar_5').style = `width: ${allPokemon[i]['stats']['4']['base_stat']}%`;
  document.getElementById('bar_6').style = `width: ${allPokemon[i]['stats']['5']['base_stat']}%`;
}

function add_dnone() {
  for (let i = 0; i < allPokemon.length; i++) {
    let color = allPokemon[i]['types']['0']['type']['name'];
    document.getElementById('backGround').classList.add('d-none');
    document.getElementById('pokedex').classList.remove(`${color}`)
  }
}

function checkBackgroundcolor(i) {
  let color = allPokemon[i]['types']['0']['type']['name'];
  let element = document.getElementById('pokedex');
  element.classList.add(`${color}`);
}

async function loadMorePokemon() {
  for (let i = start; i <= start + 19; i++) {
    await loadPokemon(i);
  }

  start += 20;
}

function searchPokemon() {
  let search = document.getElementById('input').value;
    search = search.toLowerCase();
    document.getElementById('mainContainer').innerHTML ='';
    for (let i = 0; i < allPokemon.length; i++) {
      let actualPokemon = allPokemon[i];
      
    if (actualPokemon['name'].toLowerCase().includes(search)) {
           document.getElementById('mainContainer').innerHTML += renderPokemons(i);
    }
  }
}







