import React, { useEffect, useState } from 'react'
import products from '../components/hoodies/hoodies'


interface DisplayCart {
    id: number,
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
        }) => {
            const product = products.filter(p => p.id == cartItem.id)
            return {
                id: cartItem.id ,
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
        console.log(cart.products.length === 0)

    }
  return (
    <div>
        <div>Total: {total}</div>
        {isEmpty ? <h1>Your cart is empty.</h1> : 
            <div>
                {cartItems.map((item,itx) => (item.inStock ? <div key={itx}>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <div>{item.qty}</div>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
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
