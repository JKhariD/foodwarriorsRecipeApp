document.addEventListener("DOMContentLoaded", () => {
  // Find Recipe btn that user clicks after enter food item
  const formRecipe = document.getElementById('search-recipe-form');
  const findRecipeBtn = document.getElementById('find-recipe-btn');
  let recipeResult = document.getElementById('recipe-result');
  const randomBtn = document.getElementById('random-fun');

  // runs when user click find recipe btn (btn type submit)
  formRecipe.addEventListener('submit', e => {
    recipeResult.innerHTML = `<img src="./asset/loading.gif">`;
    // prevent default form pg refresh after submit 
    e.preventDefault();
    // grab user input from item input
    var searchRecipeStr = document.getElementById("recipe-search-input").value;

    // search url https://api.edamam.com/search?app_key=9a5fe34698abbbcf01e1f495944a2a68&app_id=a5e40d79&count=6&q=chicken
    // get rid of spacing user inputs so my fetch function doesn't break
    var urlEncodedSearchStr = encodeURIComponent(searchRecipeStr);
    console.log(searchRecipeStr);
    axios
    .get(`https://api.edamam.com/search?app_key=9a5fe34698abbbcf01e1f495944a2a68&app_id=a5e40d79&count=6&q=${urlEncodedSearchStr}`)
    .then(resp => {
      // recipeResult.innerHTML = renderCard(resp.data.hits);
      renderRecipeCard(resp.data.hits);
      document.getElementById("recipe-search-input").value = "";
    })
    .catch(err => console.error(err));
  });

  // random activity
  randomBtn.addEventListener('click', () => {
    axios.get('https://www.boredapi.com/api/activity/')
    .then(resp => {
      renderActivityCard(resp.data);
    })
    .catch(err => console.error(err));
  });
})

const renderRecipeCard = data => {
  // console.log('data called from renderCard!', data);
  const cards = document.getElementById('recipe-result');
  cards.innerHTML = "";
  const someArr = data.map(item => {
    // console.log('item?', item);
    const currentItem = item.recipe;
    const card = document.createElement('div');
    card.className = 'recipe-flex-row';
    card.innerHTML = `
      <div class="recipe row">
        <div class="card" style="width: 18rem;">
          <img src="${currentItem.image}" class="card-img-top" alt="${currentItem.label}">
          <div class="card-body">
            <h5 class="card-title"><a href="${currentItem.url}">${currentItem.label}</a></h5>
          </div>
        </div>
      </div>
    `;
    cards.appendChild(card);
  });
}

const renderActivityCard = data => {
  // console.log('data called from renderCard!', data);
  const cards = document.getElementById('random-result');
  cards.innerHTML = "";
  cards.innerHTML = `
    <div class="row">
      <div class="card" style="width: 18rem;">
        <h3 class="card-title">Activity:${data.activity}</h3>
        <div>Activity Type: ${data.type}</div>
      </div>
    </div>
  `;
}
// https://www.boredapi.com/api/activity/

