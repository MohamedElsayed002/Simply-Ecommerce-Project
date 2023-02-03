import Header from './component/Header'
import Footer from './component/Footer'
import {Link , Route , Routes} from 'react-router-dom'
import './index.css'
import Cart from './pages/cart'
import Photos from './pages/photos'

export default function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route exact path="/" element={ <Photos/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </main>
  )
}
