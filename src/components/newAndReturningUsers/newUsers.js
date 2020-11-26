import axios from'axios'

export async function newUsers(name, username, password1, email){
    try{
      const response = await axios.post('/signup', { 
        name: name,
        username: username,
        password: password1,
        email: email
      });
      await response.json;
      console.log(response);
    } catch(err){
      console.log(err)
    }
}

export async function returningUsers(email, password){
    try{
      const response = await axios.post('/login', {
        email: email,
        password: password
      });
      await response.json;
      console.log(response);
    } catch(err){
      console.log(err)
    }
}


// const returningUsers = (email, password) => {

//   const {login} = useAuth();
//   return (
//      axios.post('/login', {
//       email: props.email,
//       password: props.password
//     }).then(  res => {
//        console.log(res.data);
//        login();
//     })
//     .catch(err => console.log(err))
//   )}


// export default returningUsers
