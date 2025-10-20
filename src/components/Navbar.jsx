import styles from './Navbar.module.css';
import iconocart from '../assets/flowbite--cart-outline.svg';
const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="">Contacto</a></li>
            <li><a href=""><img src={iconocart} alt="" /></a></li>
        </ul>
      
    </div>
  )
}

export default Navbar
