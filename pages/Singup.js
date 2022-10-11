import styles from '../styles/SingupPage.module.css'
import { useState } from "react";
import Link from 'next/link';

function Singup() {

 const [user,setUser] = useState ({ email : "" , password : "" })

    const criaruser = async ({email: email , password : password }) => {
        const res = await fetch(`/singup/${email,password}`,
        { method: "POST" })
        const body = await res.json()
        setUser(body.user)
    }

    return (
        <div className="">
            <h1>Register</h1>
            <input type="text" placeholder='Email'></input>
            <input type="password" placeholder='Password'></input>x
            <input type="password" placeholder='PasswordConfirm'></input>
            <button className={styles.singup} >SingUp</button>
            <Link href="/" ><button>Voltar</button></Link>
        </div>  
        
     
    )
}

export default Singup
