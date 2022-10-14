import { useState } from 'react'
import Login from '../Login'
import Singup from '../Singup'
import styles from '../../styles/HomePage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { style } from '@mui/system';
import { Style } from '@mui/icons-material';
import { BunkerCard } from '../../components/BunkerCard'

const bunkers = [
  {
    imagePath: "/Bunker1/1a.jpg",
    imagePath2: "/Bunker1/2a.jpg",
    imagePath3:"/Bunker2/3a.jpg",
    imagePath4: "/Bunker4/B.jpg",
    imagePath5: "/Bunker1/1a.jpg",
    1: "/Bunker1/2a.jpg",
    2: "/Bunker3/1a.jpg",
    3: "/Bunker4/1a.jpg",
    4: "/Bunker5/1a.jpg",
    intro: "The world's largest  complex underground shelter for long-term protection, with individual chambers and built in-line with the preferences of the owner.",
    name: "VIVOS EUROPA ONE",
    price: "2.2 M",
    description: "The area is highly protected, with security guards and gates surrounding the property. Each of the three main tunnel entrances includes an outer security door system, followed by a 40 ton hydraulic truck access door with hardened steel rods which expand into the surrounding encasement, and a second set of massive steel doors providing an airtight seal shut, protecting against chemical, biological and gas intrusion.",
    container: "10 GUESTS•2 BEDROOMS•2 BATHS• GREEN HOUSE",
    location: {
      city: "Nantes",
      country: "France"
    },
    tags: ["biochemical", "cyber"],
    tagB: "/Icones_Catastrofes/biochemical.png",
    tagE: "/Icones_Catastrofes/cyber.png",
    help: "Feel free to contact us, for any question you might have. Our team is always avaiable to help you find a secure space for you and your loved ones to survive doomsday."
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
