import React from 'react'
import styles from '../../styles/Hoodies.module.scss'

const hoodies = () => {
  return (
    <div className={styles.hoodies}>
      <div className={styles.container}>
          <h1 className={styles.title}>Hoodies Collection</h1>
          <div className={styles.sort}>
            <svg className={styles.filter} aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z" fill="currentColor"></path>
            </svg>
            <p>Filter</p> 
          </div>
          <div className={styles.row}>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <img  alt='img' src='https://cdn.shopify.com/s/files/1/0684/1457/0804/products/image_31086985-d9e4-4bef-a23e-882c9ce41472.png?v=1669277501&width=990'></img>
                </div>
                <button className={styles.card__button}>Sale</button>
                <div className={styles.card_information}>
                  <p>Premium Hoodie V1</p>
                  <p className={styles.card__price}>£ 39.99 GBP</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <img  alt='img' src='https://cdn.shopify.com/s/files/1/0684/1457/0804/products/image_31086985-d9e4-4bef-a23e-882c9ce41472.png?v=1669277501&width=990'></img>
                </div>
                <button className={styles.card__button}>Sale</button>
                <div className={styles.card_information}>
                  <p>Premium Hoodie V1</p>
                  <p className={styles.card__price}>£ 39.99 GBP</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <img  alt='img' src='https://cdn.shopify.com/s/files/1/0684/1457/0804/products/image_31086985-d9e4-4bef-a23e-882c9ce41472.png?v=1669277501&width=990'></img>
                </div>
                <button className={styles.card__button}>Sale</button>
                <div className={styles.card_information}>
                  <p>Premium Hoodie V1</p>
                  <p className={styles.card__price}>£ 39.99 GBP</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <img  alt='img' src='https://cdn.shopify.com/s/files/1/0684/1457/0804/products/image_31086985-d9e4-4bef-a23e-882c9ce41472.png?v=1669277501&width=990'></img>
                </div>
                <button className={styles.card__button}>Sale</button>
                <div className={styles.card_information}>
                  <p>Premium Hoodie V1</p>
                  <p className={styles.card__price}>£ 39.99 GBP</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <img  alt='img' src='https://cdn.shopify.com/s/files/1/0684/1457/0804/products/image_31086985-d9e4-4bef-a23e-882c9ce41472.png?v=1669277501&width=990'></img>
                </div>
                <button className={styles.card__button}>Sale</button>
                <div className={styles.card_information}>
                  <p>Premium Hoodie V1</p>
                  <p className={styles.card__price}>£ 39.99 GBP</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <img  alt='img' src='https://cdn.shopify.com/s/files/1/0684/1457/0804/products/image_31086985-d9e4-4bef-a23e-882c9ce41472.png?v=1669277501&width=990'></img>
                </div>
                <button className={styles.card__button}>Sale</button>
                <div className={styles.card_information}>
                  <p>Premium Hoodie V1</p>
                  <p className={styles.card__price}>£ 39.99 GBP</p>
                </div>
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default hoodies