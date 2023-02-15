

//STYLES
import Navbar from '../../components/navbar/Navbar'
import styles from './styles/SobreNos.module.css'


//LIBS
import Typewriter from "typewriter-effect";

function SobreNos(){
    return(
        <section className={styles.sobre_nos} id="sobre_nos">
            

            <div className={styles.sobre_nos_box}>

                <div className={styles.left_box}>

                    <div className={styles.left_text}>
                        <span className={styles.left_mark1}>"</span>
                            <p>
                                Uma empresa de desenvolvimento com as tecnologias mais atualizadas, e que vai impulsionar o seu negócio em centenas de vezes
                            </p>
                        <span className={styles.left_mark2}>"</span>
                    </div>
                </div>

                <div className={styles.right_box}>
                    <div className={styles.right_box_align}>

                            <div className={styles.h1}><h1>
                            <Typewriter
                            options={{
                                strings: ['Quem somos?', 'Realizamos seus sonhos!'],
                                autoStart: true,
                                loop: true,
                                delay: 'natural',
                                pauseFor: 5000
                            }}
                            />
                            </h1></div>


                            <div className={styles.right_text} >
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel arcu non urna accumsan fringilla. In tortor tellus, suscipit vel suscipit non, placerat vel eros. Vivamus eget volutpat nulla, vitae elementum nunc. Curabitur eleifend egestas lorem, at viverra enim auctor a. Proin a cursus sapien, nec porta nulla. Curabitur lobortis nisi eu porttitor tincidunt. Etiam nec leo et quam blandit dignissim at eget mi.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}export default SobreNos