import { useState } from 'react'
import Login from '../Login'
import Singup from '../Singup'
import styles from '../../styles/HomePage.module.css'
import stylo from '../../styles/bunkerPage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { style } from '@mui/system';
import { Style } from '@mui/icons-material';
import { BunkerCard } from '../../components/BunkerCard'

const bunkers = [
  {
    imagePath: "/Bunker2/3a.jpg",
    imagePath2: "/Bunker2/3a.jpg",
    imagePath3: "/Bunker2/3a.jpg",
    imagePath4: "/Bunker2/3a.jpg",
    imagePath5: "/Bunker2/3a.jpg",
    name: "LAS VEGAS UNDERGROUND",
    price: "18 M",
    location: {
      city: "Las Vegas",
      country: "United States"
    },
    tags: ["eartquake", "iceage"],
    help: "Feel free to contact us, for any question you might have. Our team is always avaiable to help you find a secure space for you and your loved ones to survive doomsday.",
    intro: "Not only for survival shelter but it is also planned as completely self-sufficient second home",
    description: "É um bunker em frança onde pode desfrutar de umas belas férias longe da humanidade e para sobreviver a catastrofes como terramoto ou radiação.",
    container: "10 GUESTS•2 BEDROOMS•2 BATHS• GREEN HOUSE",
    tagB: "/Icones_Catastrofes/iceage.png",
    tagE: "/Icones_Catastrofes/earthquake.png",
  },
]

function Header() {
  return (
    <div className={styles.header}
      style={{ backgroundImage: "url(/header.jpg)" }}>
      <img src={"./logo.png"} className={styles.logo} />
      <div className={styles.headeritem}>
      </div>



      <div className={styles.login}>
        <Link href={'/Login'}><button className={styles.button_login}>Login</button></Link>
      </div>
      <div className={styles.login}>
        <Link href={'/Singup'}><button className={styles.button_singup}>SignUp</button></Link>

      </div>
      <div className={styles.login}>
        <Link href={'/Perfil'}><button className={styles.button_perfil}>Perfil</button></Link>
      </div>


    </div>
  )
}

export default function Home() {

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.body}>
        <BunkerCard data={bunkers[0]}></BunkerCard>

      </div>
      <div className={styles.body}>


      </div>
    </div >


  )
}

function Icons({ data }) {
  let logo = "/Bunker1/1a.jpg"
  let logo1 = "../public/Bunker1/1a.jpg"
  let tag = [logo, logo1]
  return (
    <img src={data.imagePath} className={stylo.bunker2} />
  )
}
