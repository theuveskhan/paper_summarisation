   // frontend/src/api/paperApi.js
   import axios from 'axios';

   const API_URL = 'http://localhost:5000/api/papers';

   export const fetchPapers = async () => {
       const response = await axios.get(API_URL);
       return response.data;
   };

   export const addPaper = async (paper) => {
       const response = await axios.post(API_URL, paper);
       return response.data;
   };