import React from 'react'
import styles from '../../styles/Hoodies.module.scss'
import Image from 'next/image'
import hoodie from '../../components/hoodies/hoodies'
import Link from 'next/link'

const hoodies = () => {
  return (
    <main>
      <section className={styles.hoodies}>
        <div className={styles.container}>
            <h1 className={styles.title}>Hoodies Collection</h1>
            <div className={styles.sort}>
              <svg className={styles.filter} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                <path fillRule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" fill="currentColor"></path>
              </svg>
              <p>Filter</p> 
            </div>
            <div className={styles.row}>
              {hoodie.map((item:any,itx:any) => (
                <Link key={itx} href={`/product/${item.name.toLowerCase().replaceAll(' ', '-')}`}>
                   <div className={styles.card}>
                    <div className={styles.card__img}>
                      <Image priority src={item.image} alt='hoodie'></Image>
                    </div>
                    <button className={styles.card__button}>Sale</button>
                    <div className={styles.card_information}>
                      <p>{item.name}</p>
                      <p className={styles.card__price}>{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </section>
    </main>
  )
}

export default hoodies