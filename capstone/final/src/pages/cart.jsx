import {useState,useContext} from 'react'
import {Context} from '../Context'
import CartItem from '../component/CartItem'


function Cart () {
    const [buttonText,setButtonText] = useState("Place Order") 
    const [hovered,setHovered] = useState(false)
    const {cartItems,emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    



    function placeOrder () {
        const chechking = cartItems.length > 0 
        if (chechking) {
            setButtonText("Ordering...")
            setTimeout( () => {
                setButtonText("Place Order")
    
                emptyCart()
            },3000)
        }else {
            alert("Your cart is empty")
        }
      
    }
    return (
      <main className="cart-page">
          <h1 >Cart Page</h1>
          {cartItemElements}
          <p className="total-cost">Total : {totalCostDisplay}</p>
          <div className="order-button">
            <button onClick={() => placeOrder()}>{buttonText}</button>
          </div>
      </main>
    )
  }
  
  export default Cart