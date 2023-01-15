import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

// import hoodies from '../../components/hoodies/hoodies'
import styles from '../../styles/Product.module.scss'
import Image from 'next/image'


export async function getServerSideProps(context:any) {

  const product: Product[] = []; //hoodies.find(x => x.name.toLowerCase().replaceAll(' ', '-') == context.query.id)
  return {
    props:{product}
  }
}
interface Product{
  id: number,
  image: string,
  name:string,
  price:number,
  size:any,
  stock:number,

}
interface Props {
  product:Product;
  products:Product[]
}
interface CartItem {
  cid: string;
  products:Array<{
    size:string;
    img:string;
    id:number;
    qty:number;
  }>;
}


export default function ProductInfo({product}:Props): React.ReactElement{
  const [quantity,setQuantity] = useState(1)
  const [productSizeButton,setProductSizeButton] = useState('product__size__button')


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
    let cart:CartItem

    function addToCart():void {
      const cs = localStorage.getItem('cart');

      let isAdded = false
      if(!cs){
        cart = {
          cid: uuidv4(),
          products:[{
             id: product.id,
             qty: quantity,
             img:product.image,
             size: 'M',
          }]
        }
      }
      else{
        cart = JSON.parse(cs)
        cart.products= cart.products.map(({img, id, qty}) => {
          if(id == product.id)
          {
            isAdded = true
            return {img, id , qty: qty + 1, size:'M'}
          }
          return {img, id, qty, size:'M' }
        })
        if(!isAdded){
          cart.products.push({
            img:product.image,
            size: 'M',
            id:product.id,
            qty: quantity
          })
        }
      }
      localStorage.setItem('cart',JSON.stringify(cart))
      console.log('cart',cart)
    }

    const changeSize = (e:any) => {
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
              <div className={styles.product__size__text}>Size</div>
              <div className={styles.product__size}>
                {product.size.map((variant:any,itx:any) => (
                  <div key={itx}>
                    <button className={styles.product__size__button} onClick={changeSize}>{variant}</button>
                  </div>
                ))}
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
            <button onClick={addToCart} className={styles.product__addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}
