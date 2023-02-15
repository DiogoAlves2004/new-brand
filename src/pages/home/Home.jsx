

//STYLES
import Navbar from '../../components/navbar/Navbar'
import styles from './styles/Home.module.css'


import Logo from '../../img/logo.jpeg'

function Home(){
    return(
        <section className={styles.home}>
            <Navbar href='/sobre_nos' />


            <img className={styles.home_image} src={Logo}/>
            
        </section>
    )
}export default Home