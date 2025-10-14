import styles from './Footer.module.css';
const Footer = () => {
  return (
    
      <footer className = {styles.footermodule}>
        <p className={styles.copyright}>© 2025 MiTienda - Todos los derechos reservados.</p>
        <ul>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
            
      </footer>

    
  )
}

export default Footer
