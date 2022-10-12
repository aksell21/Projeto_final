import { useState } from 'react'
import Login from './Login'
import Singup from './Singup'
import styles from '../styles/HomePage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';


function Header(){
  return (
    <div className={styles.header}
    style = {{backgroundImage:"url(/header.jpg)"}}>
      <h1>LOOKING TO SURVIVE IN STYLE?</h1>
      <h5>A.BUNKER has the best solutions to enjoy the end of days.</h5>
      <div className={styles.headeritem}>
        <h2>Logo</h2>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.search}> 
         <SearchIcon/>
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
      
      
      <div className={styles.squares}>
        
      </div>
      <div className={styles.squares}>

      </div>
      <div className={styles.squares}>

      </div>
    </div>
    <div className={styles.body}>
      
      <div>
        Preço: 2.2 M€<br></br>
        Bunker: VIVOS EUROPA ONE<br></br>
        Rohenstein, Germany
      </div>
      <div>
        Preço: 18 M€<br></br>
        Bunker: LAS VEGAS UNDERGROUND<br></br>
        Las Vegas, United States
      </div>
      <div>
        Preço: 3 M€<br></br>
        Bunker: THE SAFE HOUSE<br></br>
        Warsaw, Poland
      </div>
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
        Preço: 4.8 M€<br></br>
        Bunker: HOUSE PLAN B<br></br>
        Ukraine
      </div>
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
        Preço: 600 000 €<br></br>
        Bunker: NOMAD BUNKER<br></br>
        Anywhere
      </div>
    </div>
  </div >
  

  )
}
function A() {
  return (
      <div>
          <div className={styles.upper}>
              <img></img>
              <div></div>
          </div>
          <div className={styles.lower}>
              <div></div>
              <div></div>
          </div>
      </div>
  )
}



// return (
//     <div className={styles.container}>

//       <div className={styles.header}>
//         <div className={styles.headeritem}> 
//           <h1>Logo</h1>
//         </div>
//         <div className={styles.searchBar}>
//           <input type="text" placeholder="Search.." />
//           <SearchIcon />
//         </div>
//         <div className={styles.login}>
//           <a href={'http://localhost:3000/Login'} onClick={() => Login.Login}>Login</a>
//         </div>
//       </div>
//       <div className={styles.header}>
//         <div className={styles.retangulo}>

//         </div>
//       </div>
//       <div className={styles.body}>
        
//         <div className={styles.squares}>
          
//         </div>
//         <div className={styles.squares}>

//         </div>
//         <div className={styles.squares}>

//         </div>
//       </div>
//       <div className={styles.body}>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//       </div>
//       <div className={styles.body}>
//         <div className={styles.squares}>

//         </div>
//         <div className={styles.squares}>

//         </div>
//         <div className={styles.squares}>

//         </div>
        
//       </div>
//       <div className={styles.body}>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//       </div>
//       <div className={styles.body}>
//         <div className={styles.squares}>

//         </div>
//         <div className={styles.squares}>

//         </div>
//         <div className={styles.squares}>

//         </div>
        
//       </div>
//       <div className={styles.body}>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//         <div>
//           Preço: 999€<br></br>
//           Bunker: XXX
//         </div>
//       </div>
//     </div >
// )