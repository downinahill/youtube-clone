

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    
    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidApi-Key': '0ddebc98afmshbab283cb50c1635p16a122jsnb8c70577a57b',
      'X-RapidApi-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
console.log()
  return data;
};