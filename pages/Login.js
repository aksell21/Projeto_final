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