import '../styles/Cart.css'
import { useState } from 'react'


function cart() {
  const monsteraPrice = 8
  const [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(false)



  return isOpen ? (

    <div className="lmj-cart">
      <button
        className='lmj-cart-toggle-button'
        onClick={() => setIsOpen(false)}>Fermer
      </button>
      <h2>Panier</h2>
      <div className="lmj-cart-item">
        Monstera:
        {monsteraPrice}$
        <button onClick={() => updateCart(cart + 1)}>
          Ajouter
        </button>
      </div>
      <h3>Total :{monsteraPrice * cart}$</h3>
      <button onClick={() => updateCart(0)}>vider le panier </button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}>ouvrir le panier
      </button>
    </div>
  )
}

export default cart 