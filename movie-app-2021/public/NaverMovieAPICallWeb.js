//import axios from 'axios';
//let axios = require('axios');
let result;
            
let getSearchMovie = async () => {
  const ID_KEY = 'BRxEcbaQekU87_oCZRe_';
  const SECRET_KEY = 'vJwDUa26jE';

  try { 
               const {data: { 
                  items 
                }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{ 
                  params:{ 
                    query: "히어로", 
                    display: 20 
                  }, 
                  headers: { 
                    'X-Naver-Client-Id': ID_KEY, 
                    'X-Naver-Client-Secret': SECRET_KEY 
                  } 
                }); 
                console.log("items: ", items);
                result = items;
  } catch (error) { 
      console.log(error); 
  } 
}; 

getSearchMovie();
console.log("result: ", result);

            