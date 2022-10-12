import styles from '../styles/SingupPage.module.css'
import { useState } from "react";
import Link from 'next/link';
import {fazPedido} from '../pages/src/Utils/res'


function Singup() {

 const [user,setUser] = useState ({ user : "",email : "" , password : "" , passwordConfirmation : "" , acceptsTerms : false })
 const [erro,setErro] = useState ({})

 const handleSubmit = () => {
    fazPedido("/api/signup/","POST",user)
}

    return (

    <div className={styles.container_singup}>
     <div className={styles.row}>
       <label for="Name">Name</label>

     <input
            type="text"
            className="name"
            value={user.user}
            placeholder = "Nome Para o utilizador"
            onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, user: e.target.value }))} />
     <label for="email">Email</label>    
        <input
            type="text"
            value={user.email}
            placeholder = "Email"
            onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, email: e.target.value }))} />
    <label for="passowrd">Password</label>

        <input
            type="password"
            value={user.password}
            placeholder = "Password"
            onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} />
    <label for="confpassowrd">Confirmaçao da Password</label>    

       <input
            type="password"
            value={user.passwordConfirmation}
            placeholder = "Confirmaçao  Password"
            onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, passwordConfirmation: e.target.value }))} />

       <div className={styles.terms}>
       <input type="checkbox" value={user.acceptsTerms} onChange={(e) => setUser(prevAuthValues => ({ ...prevAuthValues, acceptsTerms: e.target.checked }))}/>
       <label for="">Aceita os nosso termos</label>
       </div>

         <button type="submit" onClick={() => handleSubmit()}>SingUp</button>
        <Link href="/" ><button type="button">Voltar</button></Link>
    </div>
  
</div>    
     
    )
}

export default Singup
