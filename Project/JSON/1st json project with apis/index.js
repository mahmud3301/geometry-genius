const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err) => {
        console.log(err);
      })
}

const showData = (data) => {
    for (let singleData of data.slice(0,50)) {
        const container = document.getElementById("post-info");
        const div = document.createElement("div"); 
        div.innerHTML = `
        <h1 class = "text-center text-5xl mb-3">${singleData.id}</h1>
        `;

        container.appendChild(div);
    }
};

loadData();