import axios from'axios'
import jwtDecode from 'jwt-decode';


export async function newUsers(name, username, password1, email){
    try{
      const response = await axios.post('https://cosc484-backend.herokuapp.com/signup', { 
        name: name,
        username: username,
        password: password1,
        email: email
      });
      await response.json;
      console.log(response.data.token);
      localStorage.setItem('MongoIdToken', `Bearer ${response.data.token}`)
      const token = localStorage.MongoIdToken;
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.payload._id;
      localStorage.setItem('userId', userId)
    } catch(err){
      console.log(err)
    }
}

export async function returningUsers(email, password){
    try{
      const response = await axios.post('https://cosc484-backend.herokuapp.com/login', {
        email: email,
        password: password
      });
      await response.json;
      console.log(response.token);
      console.log(response);

      localStorage.setItem("token", response.token)
    } catch(err){
      console.log(err)
    }
}
