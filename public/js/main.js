console.log("funciono");
let but = document.querySelector('.but');

but.addEventListener('click', () => {
  console.log("Boton Apretado");
  sendApiRequest();
});

async function sendApiRequest() {
  let API_KEY = "DI7BkDgYKcjL4zdB1f0hNpkthVj7MG2ccs6CjYdM";
  let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  document.querySelector('#explicacion').innerHTML += data.title;
  document.querySelector('#mapContainer').innerHTML += `<img src="${data.url}">`;
}





