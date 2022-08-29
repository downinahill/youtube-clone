

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c27cc50bf1mshd954852879a570fp17094bjsnce9b3b5f8342',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

axios.get('errorStatus')
.then((response) => {})
.catch(({ response }) => { 
    console.log(response.data);  
    console.log(response.status);  
    console.log(response.headers);  
})

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};