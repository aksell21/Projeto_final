import styles from '../styles/ProfilePage.module.css'
import { useState } from "react";
import Link from 'next/link';


function Profile(props) {
    const [authValues, setAuthValues] = useState({ username: "", password: "" })
    const [editavel, setEditavel] = useState({active: true})
    const [ativo, setAtivo] = useState({active: true})
    const [voltar, setVoltar] = useState({nome: "Voltar", editar: "Editar"})

        function setEditable(i){
            if(i == true){
                console.log(editavel)
                 setEditavel(true)
                 setAtivo(true)
                 voltar.nome = "Voltar"
                 voltar.editar = "Editar"
            }
            else{
                console.log(editavel)
                 setEditavel(false)
                 setAtivo(false)
                 voltar.nome = "Cancelar"
                 voltar.editar = "Confirmar"
            }
            return editavel
        }           
         return (
            <div className={styles.container_profile}>
                <div className={styles.row}>
                <h3 className={styles.h3}>Perfil</h3>
                    <div className={styles.login}>
                        <p className={styles.label}>Nome:</p>
                            <input disabled={editavel}
                            type="text"
                            value={authValues.username}
                            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, username: e.target.value }))} />
                        <p className={styles.label}>Email:</p>
                            <input
                            disabled={editavel}
                            type="email"
                            value={authValues.password}
                            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} /><br></br>
                        <p className={styles.label}>Password:</p>
                            <input
                            disabled={editavel}
                            type="password"
                            value={authValues.password}
                            onChange={(e) => setAuthValues(prevAuthValues => ({ ...prevAuthValues, password: e.target.value }))} /><br></br>
                            <button type="submit" onClick={() => setEditable(!editavel)}>{voltar.editar}</button>
                            <Link href={'/'}><button className="">{voltar.nome}</button></Link>
                    </div>            
                </div>
            </div>
         )
           }

export default Profile