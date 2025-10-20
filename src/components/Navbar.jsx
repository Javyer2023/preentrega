import styles from './Navbar.module.css';
import iconocart from '../assets/flowbite--cart-outline.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
        <ul>
            <li><Link to={'/'}>Inicio</Link></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="">Contacto</a></li>
            <li><Link to={'/carrito'}><img src={iconocart} alt="" /></Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
