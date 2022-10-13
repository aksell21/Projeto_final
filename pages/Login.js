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
    
            <input
                type="text"
                value={authValues.email}
                onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))} />
                {erro.email && <div>{erro.email}</div>}
            <input
                type="password"
                value={authValues.password}
                onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} />
                 {erro.password && <div>{erro.password}</div>}
                
            
           
        </div>
        <button type="submit" onClick={() => handleAuthenticate()}>Login</button>
          <span>{mensagem}</span>
            <Link href="/" ><button type="button">Voltar</button></Link>
    </div>
    )
}export default Login


