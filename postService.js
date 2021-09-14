const request = require('postman-request');

const url = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = () => {
  request({ url, json: true }, (error, response) => {
    if (error) {
      console.log('Ocurrió un error', error);
    } else {
      console.log(response.body);
    }
  });
};
module.exports = {
  getPosts
}

getPosts();