import { useState } from 'react'
import Login from './Login'
import styles from '../styles/HomePage.module.css'
import SearchIcon from '@mui/icons-material/Search';



export default function Home() {
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.headeritem}> <h1>Logo</h1></div>
        <div className={styles.headeritem}>
          <input type="text" placeholder="Search.." />
          <SearchIcon />
        </div>
        <div className={styles.headeritem}>

        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>
        <div className={styles.squares}>

        </div>
      </div>
    </div >
  )
}
