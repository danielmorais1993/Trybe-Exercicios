// apiScript.js
const API_URL = 'https://redesupermarket.com.br/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'Accept: text/html' },
  };

   fetch(API_URL, myObject)
    .then((response) => response)
    .then((data) =>  console.log(data));
   
    
};


// fetchJoke();