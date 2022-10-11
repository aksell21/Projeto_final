import { useState } from 'react'
import Login from './Login_v4/Login'
import styles from '../styles/HomePage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';



export default function Home() {
  
return (
  <div className={styles.container}>

    <div className={styles.header}>
      <div className={styles.headeritem}> 
        <h1>Logo</h1>
      </div>
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <input type="text" placeholder="Search.." />
          <SearchIcon />
        </div>
      </div>
      <div className={styles.login}>
        <from>
        <Link href={'/Login'}>Login</Link>
        </from>
      </div>
    </div>
    <div className={styles.header}>
      <div className={styles.retangulo}>

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
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
      <div>
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
      <div>
        Preço: 999€<br></br>
        Bunker: XXX
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
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
      <div>
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
      <div>
        Preço: 999€<br></br>
        Bunker: XXX
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
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
      <div>
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
      <div>
        Preço: 999€<br></br>
        Bunker: XXX
      </div>
    </div>
  </div >

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