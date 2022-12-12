import React,{useState} from 'react'

import hoodies from '../../components/hoodies/hoodies'
import styles from '../../styles/Product.module.scss'
import Image from 'next/image'


export async function getServerSideProps(context:any) {


  const product = hoodies.find(x => x.name.toLowerCase().replaceAll(' ', '-') == context.query.id)
  return {
    props:{product}
  }
}


const ProductInfo = ({product}:any) => {
  const [quantity,setQuantity] = useState(1)

  const handleClick = (event:any) => {
      if(event.target.value == '+'){
        setQuantity(quantity + 1)
      }
      if(quantity > 1){
        if(event.target.value == '-'){
          setQuantity(quantity - 1)
        }
      }
    }
  return (
    <section className={styles.product}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.product__image}>
            <Image alt='hoodie' src={product.image}></Image>
          </div>
          <div className={styles.product__info}>
            <h1 className={styles.product__title}>{product.name}</h1>
            <div className={styles.product__order__info}>
              <p className={styles.product__price}>{product.price}</p>
              <button className={styles.product__price__button}>Sale</button>
            </div>
            <div className={styles.product__order__size}>
              <h1>Size</h1>
              <div className={styles.product__size}>
                <button className={styles.product__size__button}>XS</button>
                <button className={styles.product__size__button}>S</button>
                <button className={styles.product__size__button}>M</button>
                <button className={styles.product__size__button}>L</button>
              </div>
            </div>
            <div className={styles.product__quantity}>
                <div className={styles.product__quantity__title}>Quantity</div>
                <div className={styles.product__quantity__info}>
                  <input type="button" className={styles.product__quantity__input} onClick={handleClick} value="-"></input>
                  <div className={styles.product__quantity__count}>{quantity}</div>
                  <input type="button" className={styles.product__quantity__input} onClick={handleClick}  value="+"></input>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfo
