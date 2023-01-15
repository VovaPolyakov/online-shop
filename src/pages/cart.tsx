import React, { useEffect, useState } from 'react'
import styles from '../styles/Cart.module.scss'
import Image from 'next/image'

interface DisplayCart {
    id: number,
    img:string,
    size:string,
    price: number,
    qty: number,
    inStock: boolean
    name:string

}

const Cart = () => {
    const [cartItems,setCartItems] = useState<DisplayCart[]>([])
    const [isEmpty,setIsEmpty] = useState<boolean>(false)
    const [total,setTotal] = useState<number>(0)
    const [cartId,setCartId] = useState<string>("")

    useEffect(() => {
        if(cartItems.length == 0)
        return
        const t = cartItems.reduce((sum,item:DisplayCart,currentIndex) => {
            if(item.inStock)
            sum = sum + (item.price * item.qty)
            return sum
        }, 0)
        setTotal(t)
    }, [cartItems])

    useEffect(() => {
        const cs = localStorage.getItem('cart')
        if(!cs)
        {
            setIsEmpty(true)
            return
        }
        const cart = JSON.parse(cs)
        setCartId(cart.cid)
        let cartItemArray = cart.products.map((cartItem: {
            id:number;
            qty:number;
            size:string;
        }) => {
            const product = cart.products.filter(({id}: {id: number}) => id == cartItem.id)
            return {
                id: cartItem.id ,
                img:product[0].image,
                size:cartItem.size,
                name: product[0].name,
                price: product[0].price,
                qty: cartItem.qty,
                inStock:(product[0].stock >= cartItem.qty) ? true : false
            }
        })
        setCartItems(cartItemArray)
    }, [])

    function removeItem(id:number){
        const newCart = cartItems.filter(ci => ci.id != id)
        setCartItems(newCart)
        const cart = {
            cid:cartId,
            products: newCart.map(item => ({id:item.id,qty:item.qty}))
        }
        if(cart.products.length === 0){
            setIsEmpty(true)
            localStorage.removeItem('cart')
            setTotal(0)
        }
        else{
            localStorage.setItem('cart',JSON.stringify(cart))
        }
    }
  return (
    <div className={styles.container}>
        <div>Subtotal: {total}</div>
        {isEmpty ? <h1>Your cart is empty.</h1> :
            <div>
                {cartItems.map((item,itx) => (item.inStock ?
                <div className={styles.product} key={itx}>
                    <div className={styles.product_img}>
                        <Image alt='product' src={item.img}></Image>
                    </div>
                    <div className={styles.product_name}>{item.name}</div>
                    <div className={styles.product_price}>{item.price}</div>
                    <div className={styles.product_price}>Size: {item.size}</div>
                    <div className={styles.product_qty}>{item.qty}</div>
                    <button className={styles.product_remove} onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                    :
                    <div key={itx}>Item {item.name} was in stock when you added in Cart but now it is out of stock</div>
                    ))
                }
            </div>
        }
    </div>
  );
}

export default Cart;
