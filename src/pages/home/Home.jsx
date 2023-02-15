

//STYLES
import Navbar from '../../components/navbar/Navbar'
import styles from './styles/Home.module.css'


import Logo from '../../img/logo1.jpeg'

function Home(){
    return(
        <section className={styles.home}>
            <Navbar href='/sobre_nos' />


            <img className={styles.home_image} src={Logo}/>

            <button className={styles.button}>Faca seu orçamento</button>
            
        </section>
    )
}export default Home