

import React , {useState , useEffect} from 'react'

const Context = React.createContext()

function ContextProvider ({children}) {
  const [allPhotos,setAllPhotos] = useState([])
  const [cartItems,setCartItems] = useState([])

  const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => setAllPhotos(data))
},[])

function toggleFavorite(id) {
    const updateArr = allPhotos.map(photo => {
        if (photo.id === id) {
            return {...photo , isFavorite:!photo.isFavorite}
        }
        return photo
    })
    setAllPhotos(updateArr)
}
function addToCart(newCard) {
    setCartItems(prevCart => [...prevCart,newCard])
}
function removeFromCart(id) {
    setCartItems(prevCart => prevCart.filter(item => item.id !== id))
    alert("removed from cart")
}
function emptyCart () {
    setCartItems([])
}
  return (
    <Context.Provider value={{allPhotos,toggleFavorite,addToCart,removeFromCart,cartItems,emptyCart}}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider , Context}