const results = document.getElementById("result");

const renderFolks = data => {
    const resultHTML = data.map(item => {
        return `
            <div class="portrait"
                <div class="card">
                    <img src="${item.Face}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${item.Name}</h5>
                    <p class="card-text">${item.About}</p>
                    <a href="${item.Linkedin}" class="btn btn-primary">Linkedin</a>
                </div>
            </div>
        `;
    });
    results.innerHTML = resultHTML.join("");
    return results;
}

const fetchData = url => {
    axios.get(url)
    .then(resp => {
        console.log("axios result data", resp.data);
        renderFolks(resp.data);
    })
    .catch(err => console.error(err));
}

fetchData('./aboutData.json');
