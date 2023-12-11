import axios from "axios";
 
const  UserApi = axios.create({
   baseURL:'https://themajesticquran.doctorsforhealth.co.uk/api/user',
  
})
export default UserApi