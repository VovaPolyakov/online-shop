import React from 'react'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import menu from '../Menu/menu'

const Modal = ({active, setActive}:any) => {
  return (
    <div className={active ? styles.modal_active : styles.modal} >
        <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
            <div className={styles.modal_info}>
                <p className={styles.modal_title}>Quick links</p>
                <p onClick={() => setActive(false)} className={styles.cross}>x</p>
            </div>
            <div className={styles.modal_menu}>
                {menu.map((item:any,itx:number) =>  (
                    <Link onClick={() => setActive(false)}  key={itx} href={item.link}><li className={styles.item} key={itx}>{item.name}</li></Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Modal
