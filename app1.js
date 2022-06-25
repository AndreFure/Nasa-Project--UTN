let userMessageInputForm = document.getElementById('userMessageInputForm');
let messageUlElement = document.getElementById('messageUl');
let tasks = document.getElementById('tasks');
let submit1 = document.getElementById('submit1');

//--------------For Chapters-------------

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer j5H5y8to08Enhilcm5Zp'
}

const fetchData = async () => {
  const rawCharacters = await fetch('https://the-one-api.dev/v2/chapter', {
    headers: headers
  });
  const chapter = await rawCharacters.json();
  submit1.addEventListener('click', callAPI1);
  function callAPI1() {
    for (let ine = 0; chapter.docs.length; ine++) {
      const chap = chapter.docs[ine].chapterName;
      let messageLi = createMessageElement(chap);
      messageUlElement.appendChild(messageLi);
    }
  }
}

fetchData();

userMessageInputForm.addEventListener("submit", event => {
  event.preventDefault();
})

function createMessageElement(message) {
  let messageLi = document.createElement('li');
  let messageTextElement = document.createTextNode(message);
  messageLi.appendChild(messageTextElement);
  return messageLi;
}

function createMessageElement1(message) {
  let messageLi = document.createElement('li');
  let messageTextElement = document.createTextNode(message);
  messageLi.appendChild(messageTextElement);
  return messageLi;
}

