let but = document.querySelector('.but');
let submit = document.getElementById('submit');
let books = document.getElementById('books');
let imgBooks = document.getElementById('imgBooks');
let booksList = document.getElementById('booksList');

//--------------For books-------------

const url = 'https://the-one-api.dev/v2/book';

//Event
but.addEventListener('click', callAPI);

//functions
async function callAPI() {
  const booksResponse = await fetch(url)
  const data = await booksResponse.json()
  for (let i = 0; data.docs.length; i++) {
    const taski = data.docs[i].name;
    const li = document.createElement('li');
    li.innerHTML = taski;
    document.querySelector('#booksList').append(li);
  }
}