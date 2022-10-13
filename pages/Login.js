import styles from '../styles/LoginPage.module.css'
import { useState } from "react";
import Link from 'next/link';
import { fazPedido } from './src/Utils/res';


function Login() {
    const [authValues, setAuthValues] = useState({ email: "", password: "" })
    const [erro,setError] = useState("")
    const [mensagem,setMensagem] = useState("")

    const handleAuthenticate = async () => {
        setError("")
        const  res =  await fazPedido("/api/login/","POST",authValues)
        setAuthValues(res.body) 
        console.log(res)
        localStorage.setItem("token",res.body.token)

         if(res.status === 400 ){
            setError(res.body.errors)
          }
          setMensagem(res.body.message)

    }

    return (
   <div className={styles.container}> 

      <div className={styles.LoginCard}>
      <label for="email">Email</label> 
            <input
                type="text"
                value={authValues.email}
                onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))} />
                {erro.email && <div>{erro.email}</div>}
                <label for="confpassowrd">Password</label> 
            <input
                type="password"
                value={authValues.password}
                onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} />
                 {erro.password && <div>{erro.password}</div>}
                
                <span>{mensagem}</span>
                <button className={styles.button19} role="button"  onClick={() => handleAuthenticate()} >Login</button>  
                
        <Link href="/" ><button type="button"
         className={styles.buttonvoltar}
          >Voltar</button></Link>

        </div>
       
    </div>
    )
}export default Login


