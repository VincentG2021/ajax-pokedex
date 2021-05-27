const mainContainer = document.querySelector('.mainContainer');
const searchButton = document.querySelector('.searchBtn');
const pokinput = document.querySelector('input');
const pokename = document.querySelector('.pokename');
const poketype = document.querySelector('.poketype');
const picture = document.querySelector('.picture');
const pokeID = document.querySelector('.ID');
const pokeevol = document.querySelector('.evol');
const pokemoves = document.querySelector('.moves');


// RANDOM MOVES SELECTION
// const randomize = (n) => {
//   return Math.floor(Math.random() * n);
  
// }
// let n = resourcesObject.length;
// let randomIndex = randomize(n);
// let selectedObj = resourcesObject[randomIndex]['moves' + (randomIndex + 1)];
// let randomImg = selectedObj[(Math.floor(Math.random() * selectedObj.length))];
// console.log(randomMove);






// SEARCHING FOR POKEMONS
const SearchPoke = (pokemon, id) => {
  mainContainer.innerHTML = "";
  pokename.innerHTML = "Name: ";
  picture.innerHTML = "";

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then((data) => {
      const img = `<div class="pokemon">
      <img src="${data.sprites.front_default}" alt=""></img>
      <h3>${data.name}</h3>
      <h4>${data.types[0].type.name}</h4>
      <h5>${data.id}</h5>
      <h6>${data.moves[0].move.name}</h6>
    </div>`
    const pic = `<div class="picwin">
      <img src="${data.sprites.front_default}" alt=""></img>
      </div>`

      console.log(data)
      // console.log(data.sprites.front_default)

      // INSERTING into POKEDEX
      mainContainer.insertAdjacentHTML('beforeend', img);
      pokename.insertAdjacentHTML('beforeend', data.name);
      picture.insertAdjacentHTML('beforeend', pic);
      poketype.insertAdjacentHTML('beforeend', data.types[0].type.name);
      pokeID.insertAdjacentHTML('beforeend', data.id);
      pokemoves.insertAdjacentHTML('beforeend', data.moves[6].move.name);
      pokemoves.insertAdjacentHTML('beforeend', data.moves[4].move.name);
      pokemoves.insertAdjacentHTML('beforeend', data.moves[3].move.name);
      pokemoves.insertAdjacentHTML('beforeend', data.moves[8].move.name);
      
      console.log(data.moves[6, 4, 3, 8].move.name)
     
      })
   
    .catch(function(response) {
      // FAILURE RESPONSE
      console.log('Error! Please try again');
      pokinput.value = ""
      // b = document.querySelector('body')
      // b.style.transition = "all ease 5s"
      // b.style.transform = "rotate(360deg)"
      alert('YOU ENTERED A WRONG POKENAME')
  });
}
// something
// something else

// When i click on searchButton, i want the pokemon i wrote there to appear inside the mainContainer


// Entry Point
searchButton.addEventListener('click', (event) => {
  console.log(pokinput.value)
  SearchPoke(pokinput.value)
})



// https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1118