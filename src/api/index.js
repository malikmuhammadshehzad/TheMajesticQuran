import axios from "axios";
 
const  api = axios.create({
   baseURL:'https://majesticquran.doctorsforhealth.co.uk/api/majestic',
   
  
})
export default api