import {useState} from "react";

function Login(props) {
    const [authValues, setAuthValues] = useState({username: "", password: ""})
    
    const handleAuthenticate = () => {
          props.setIsLoggedIn(
            props.credenciais.find(credencial => (
                credencial.username === authValues.username && 
                credencial.password === authValues.password))?.username
          )
    }
    
    return (
    <div className="">
<input 
                  type="text"
                  value={authValues.username}
                  onChange={(e) => setAuthValues(prevAuthValues => ({...prevAuthValues, username: e.target.value}))} />
              <input
                  type="password"
                  value={authValues.password}
                  onChange={(e) => setAuthValues(prevAuthValues => ({...prevAuthValues, password: e.target.value}))}  />
              <button type="submit" onClick={() => handleAuthenticate()}>Login</button>
</div>
      )
  }
  export default Login


  /*

let user = "asd"
    let pass = "dsa"
    const handleAuthenticate = () => {
          
          if(user === authValues.username && pass === authValues.password){
           alert("Olá " + user)
            
          }
          else{
            alert("Não foi encontrado nenhum user")
          }
    }
    
    return (
    <div className={styles.titleLogin}>
        <h3 className={styles.h3}>Log in</h3>
        <div className={styles.login}>
        <p className={styles.label}>Username:</p>
            <input
             
                  type="text"
                  value={authValues.username}
                  onChange={(e) => setAuthValues(prevAuthValues => ({...prevAuthValues, username: e.target.value}))} />
                  <p className={styles.label}>Password:</p>
              <input
                  type="password"
                  value={authValues.password}
                  onChange={(e) => setAuthValues(prevAuthValues => ({...prevAuthValues, password: e.target.value}))}  /><br></br>
              <button type="submit" onClick={() => handleAuthenticate()}>Login</button>
              <button type="button" onClick={() => alert("Hora de criar uma conta")}>SignUp</button>
        </div>
        
</div>
      )
  }
  export default Login
  */