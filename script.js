// alert('Hey');
const renderCard = data => {
  // console.log('data called from renderCard!', data);
  const cards = document.getElementById('cards');
  cons someArr = data.map( item => {
    cards.innerHTML = `
      <div class="movie">
        <div class="card" style="width: 18rem;">
          <img src="${item.imageURL}" class="card-img-top" alt="The Dark Knight">
          <div class="card-body">
            <span class="badge badge-secondary">${item.date}</span>
            <h5 class="card-title">${item.imageURL}</h5>
            <button class="btn btn-primary add-movie" onclick="saveToWatchlist(tt0468569)">Add
          </button></div>
        </div>
      </div>
    `;
  });
}
const fetchData = url => {
  axios.get(url)
  .then(response => {
    // console.log("axios response data", response.data);
    renderCard(response.data);
  })
  .catch(err => console.error(err));
}

const button = document.getElementById('button');
button.addEventListener('click', () => {
  fetchData('./mock/data.json');
})
