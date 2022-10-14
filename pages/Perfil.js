import styles from '../styles/ProfilePage.module.css'
import { useState } from "react";
import Link from 'next/link';
import { fazPedido } from '../pages/src/Utils/res'
import { Message, SettingsPowerRounded } from '@mui/icons-material';
import { useRouter } from 'next/router';

function Profile() {
  const router = useRouter()
  const [user, setUser] = useState({ user: "aaa", email: "a@gmail.com", password: "Aaaaaaa1" })
  let [a, setA] = useState({ user: "aaa", email: "a@gmail.com", password: "Aaaaaaa1" })
  const [editavel, setEditavel] = useState(true)
  const [mensagem, setMensagem] = useState("Editar")
  const [cancel, setCancel] = useState("Voltar")
  let input = user.user
  function edita(aa){
    if(aa == true){
      setEditavel(false)
      setMensagem("Confirmar")
      setCancel("Cancelar")
      console.log(aa)
      return aa
    }
    else if (aa == false){
      alert("Changes complete")
      setEditavel(true)
      setMensagem("Editar")
      setCancel("Voltar")
      console.log(aa)
      return aa
    }
  }

  function cancela(aa){
    let string = a.user
    if(aa == "Cancelar"){
      console.log(user.user)
      string = setA(user.user)
      setEditavel(true)
      setMensagem("Editar")
      setCancel("Voltar")
      console.log(string)
      return aa
    }
    else if(aa == "Voltar"){
      return window.location.href = "/"
    }
  }
  return (
    <div className={styles.container_singup}>
      <div className={styles.rowFora}>
        <div className={styles.row}>
          <label>Name</label>
          <input
          disabled={editavel}
            type="text" defaultValue={a.user}
            /><br></br>

          <label>Email</label>
          <input
          disabled={editavel}
            type="text"
            defaultValue={a.email}/><br></br>
          <label>Password</label>
          <input
          disabled={editavel}
            type="text"
            className="name" defaultValue={a.password} />
          
          <div className={styles.buttons}>
            <button
              onClick={() => edita(editavel)}>{mensagem}</button>
            <button type="button" onClick={() => cancela(cancel)}>{cancel}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile

//