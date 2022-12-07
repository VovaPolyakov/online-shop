import React, { useState } from 'react'
import menu from '../menu/menu'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Modal from '../../components/Modal/Modal'


const NavBar = () => {
  const [modalActive,setModalActive] = useState(false)
  return (
    <nav className={styles.nav}>
        <Modal active={modalActive} setActive={setModalActive}/>
        <div className={styles.container}>
          <div className={styles.row}>
            <div onClick={() => setModalActive(true)} className={styles.burger}><span></span></div>
            <Link href='/'><div className={styles.logo}></div></Link>
            <ul className={styles.menu}>
              {menu.map((item:any,itx:number) =>  (
                <Link  key={itx} href={item.link}><li className={styles.item} key={itx}>{item.name}</li></Link>
              ))}
            </ul>
            <div className={styles.images}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.cart} viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
