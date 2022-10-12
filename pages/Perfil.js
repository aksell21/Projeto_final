import styles from '../styles/ProfilePage.module.css'
import { useState } from "react";
import Link from 'next/link';


function Profile(props) {
    const [authValues, setAuthValues] = useState({ username: "", password: "" })
    const [enable, setEnable] = useState(false)
         return (
            <div className={styles.container_profile}>
            <div className={styles.row}>
                 <h3 className={styles.h3}>Perfil</h3>
                 <div className={styles.login}>
                     <p className={styles.label}>Nome:</p>
                     <input disabled
                         type="text"
                         value={authValues.username}
                         onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, username: e.target.value }))} />
                     <p className={styles.label}>Email:</p>
                     <input
                     disabled
                         type="email"
                         value={authValues.password}
                         onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} /><br></br>
                    <p className={styles.label}>Password:</p>
                        <input
                     disabled
                         type="password"
                         value={authValues.password}
                         onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} /><br></br>
                     <button type="submit" onClick={() => setEnable(true)}>Editar</button>
                     <Link href={'/'}><button className="">Voltar</button></Link>
                 </div>
        
             </div>
             </div>
         )
           }

export default Profile