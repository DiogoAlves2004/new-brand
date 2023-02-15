
import { Sling as Hamburger } from 'hamburger-react'

import { useState, useEffect } from 'react'



//STYLES
import styles from './styles/Navbar.module.css'

function Navbar(props){

    const [isOpen, setOpen] = useState(false)

return(
    <header className={styles.header}>


        <nav className={styles.nav}>
        
            <ul className={styles.ul_1}>
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


        


            <div className={styles.hamburger} >
                <Hamburger  color="#ffffff" size={100} distance="lg" easing="ease-in" toggled={isOpen} toggle={setOpen} />
            </div>
            {isOpen === true ?
    
                    <ul className={styles.ul_2}>
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
                :null
            }


        </nav>
    </header>



)
}export default Navbar