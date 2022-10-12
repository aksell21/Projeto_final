import { useState } from 'react'
import Login from './Login'
import Singup from './Singup'
import styles from '../styles/HomePage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { style } from '@mui/system';
import { Style } from '@mui/icons-material';

const bunkers = [
  {
    imagePath: "/Bunker1/1a.jpg",
    name: "VIVOS EUROPA ONE",
    price: "2.2 M",
    location: {
      city: "Nantes",
      country: "France"
    },
    tags: ["biochemical", "earthquake"]
  },
  {
    imagePath: "/Bunker2/3a.jpg",
    name: "LAS VEGAS UNDERGROUND",
    price: "18 M",
    location: {
      city: "Las Vegas",
      country: "United States"
    },
    tags: ["biochemical", "earthquake"]
  },
  {
    imagePath: "/Bunker3/a.jpg",
    name: "THE SAFE HOUSE",
    price: "3 M",
    location: {
      city: "Warsam",
      country: "Poland"
    },
    tags: ["biochemical", "earthquake"]
  },
  {
    imagePath: "/Bunker4/4A.jpg",
    name: "HOUSE PLAN B",
    price: "4.8 M",
    location: {
      city: "Ukrain",
    },
    tags: ["biochemical", "earthquake"]
  },
  {
    imagePath: "/Bunker5/B.jpg",
    name: "ARTEMIS PROTECTION",
    price: "500 000",
    location: {
      city: "Nantes",
      country: "France",
    },
    tags: ["biochemical", "earthquake"]
  }
]

function Header() {
  return (
    <div className={styles.header}
      style={{ backgroundImage: "url(/header.jpg)" }}>
      <h1>LOOKING TO SURVIVE IN STYLE?</h1>
      <h5>A.BUNKER has the best solutions to enjoy the end of days.</h5>
      <div className={styles.headeritem}>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.search}>
          <SearchIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>

      <div className={styles.login}>
        <Link href={'/Login'}><button className={styles.button_login}>Login</button></Link>
        <Link href={'/Singup'}><button className={styles.button_singup}>Sign Up</button></Link>
      </div>

    </div>
  )
}

export default function Home() {

  return (
    <div className={styles.container}>
      <Header></Header>

      <div><h2>Secure your own private bunker.</h2>
        <h5>Our selection.</h5></div>
      <div className={styles.body}>
        <BunkerCard data={bunkers[0]}></BunkerCard>
        <BunkerCard data={bunkers[1]}></BunkerCard>
        <BunkerCard data={bunkers[2]}></BunkerCard>
        <BunkerCard data={bunkers[3]}></BunkerCard>
        <BunkerCard data={bunkers[4]}></BunkerCard>

      </div>
      <div className={styles.body}>


      </div>
      <div className={styles.body}>
        <div className={styles.squares}>



        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>

      </div>
      <div className={styles.body}>


        <div>
          Preço: 500 000€<br></br>
          Bunker: ARTEMIS PROTECTION<br></br>
          Nantes, France
        </div>
        <div>
          Preço: 8 M€<br></br>
          Bunker: THE OPPIDUM<br></br>
          Czech Republic
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.squares}>
          {/* <BunkerCard /> */}
        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>

      </div>
      <div className={styles.body}>
        <div>
          Preço: 40 000 €<br></br>
          Bunker: VIVOS XPOINT<br></br>
          South Dakota, United States
        </div>
        <div>
          Preço: 5.4M €<br></br>
          Bunker: DBX DOOMSDAY BUNKER<br></br>
          South Carolina, United States
        </div>
        <div>
          <div>Preço: 600 000 €</div>
          Bunker: NOMAD BUNKER
          Anywhere
        </div>
      </div>
    </div >


  )
}


function BunkerCard({ data }) {
  return (
    <div>
      <div className={styles.upper}>
        <div className={styles.BunkerImage}>
          <img src={data.imagePath} />
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.Dados}>
          <div className={style.Nomes}>{data.name}</div>
          <div className={style.Preços}>{data.location.city}, {data.location.country}</div>
          <div className={style.Local}>{data.price} €</div>
        </div>
        <div className={styles.tags}>
        </div>
      </div>
    </div>

  )
}