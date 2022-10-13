import styles from '../styles/LoginPage.module.css'
import { useState } from "react";
import Link from 'next/link';
import { fazPedido } from './src/Utils/res';


function Login() {
    const [authValues, setAuthValues] = useState({ email: "", password: "" })
    const [erro,setError] = useState("")

    const handleAuthenticate = async () => {
        const  res =  await fazPedido("/api/login/","POST",authValues)
        setAuthValues(res.body) 
        
           
    }

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={authValues.email}
                onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))} />
            <input
                type="password"
                value={authValues.password}
                onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} />
                
            <button type="submit" onClick={() => handleAuthenticate()}>Login</button>
            <Link href="/" ><button type="button">Voltar</button></Link>
           
        </div>
    )
}export default Login


