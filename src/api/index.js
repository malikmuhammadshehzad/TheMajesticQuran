import axios from "axios";
 
const  api = axios.create({
   baseURL:'https://books-list-api.vercel.app',
   headers: {
      'x-api-key': '#b0@6hX8YasCq6^unOaPw1tqR'
    }
  
})
export default api