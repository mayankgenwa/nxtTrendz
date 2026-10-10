// Write your code here

import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)
      let totalPrice = 0
      cartList.forEach(eachItem => {
        totalPrice += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <div className="total-amount-container">
              <h1 className="total-order">Order Total: </h1>
              <h2 className="rupees">Rs {totalPrice} /-</h2>
            </div>
            <p className="cart-item-count">{cartList.length} items in cart</p>
            <button className="check-out-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
