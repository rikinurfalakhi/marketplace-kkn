import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Keranjang from './pages/Keranjang'
import NavbarComponent from '../src/components/NavbarComponent'
import Produk from './pages/Produk'
import Toko from './pages/Toko'
import Login from './pages/Login'
import Registrasi from './pages/Registrasi'

function App() {



  return <div>
    <NavbarComponent></NavbarComponent>
    
    <Routes>
      <Route path='/' Component={HomePage}></Route>
      <Route path='/produk' Component={Produk}></Route>
      <Route path='/toko' Component={Toko}></Route>
      <Route path='/keranjang' Component={Keranjang}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/registrasi' Component={Registrasi}></Route>
    </Routes>
    {/* <FooterComponent></FooterComponent> */}
  </div>

}

export default App
