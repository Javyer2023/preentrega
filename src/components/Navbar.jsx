import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={styles.navcontainer}>
        <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="">Ofertas</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
      
    </div>
  )
}

export default Navbar
