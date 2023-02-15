
import { HashLink as Link } from 'react-router-hash-link';



//STYLES
import styles from './styles/Navbar.module.css'

function Navbar(props){
return(
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <a href='#sobre_nos'>Sobre nos</a>
                </li>
                <li className={styles.li}>
                    <a href='#portfolio'>portfolio</a>
                </li>
                <li className={styles.li}>
                    <a href='#squad'>Squad</a>
                </li>
                <li className={styles.li_emphasis}>
                    <a href='#contact'>Faça seu orçamento</a>
                </li>
            </ul>
        </nav>
    </header>



)
}export default Navbar