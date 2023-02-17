//STYLES
import styles from './styles/Contact.module.css'

//ICONS
import { FaWhatsapp } from 'react-icons/fa'


function Contact(){

    function orçament(e){

        let name = e.target[0].value

        let email = e.target[1].value

        let service = e.target[3].value

        let number = e.target[2].value
        console.log(name, email, service, number)

        window.location.href = `mailto:alvessilva524@gmail.com,?subject=SOLICITAÇÃO DE ORÇAMENTO&&body=solicito orçamento para ${service} meu nome e: ${name} e meu email: ${email} e meu whatsapp e: ${number}`

        return(
            <a href="mailto:?subject=Assunto do email&amp;body=Olá,%0D%0A%0D%0A[corpo do email]%0D%0A%0D%0AAtenciosamente,%0D%0A[nome do usuário]"/>
        )
    }

return(
    <section id='contact' className={styles.contact}>
        
        <form className={styles.form} onSubmit={orçament}>


            <div className={styles.left}>
                <input className={styles.input_text} type='text' placeholder='Nome' required />
                
                <input className={styles.input_text} type='email' placeholder='E-mail' required/>

                <input className={styles.input_text} type='tel' placeholder='Numero do whatsapp ex (99)999999999' required/>


                <input className={styles.input_text} type='text' placeholder='Serviço solicitado' required/>
                

                <h2 className={styles.h2}>AO REALIZAR SEU ORÇAMENTO ONLINE ENTRAREMOS EM CONTATO EM ATE 2 DIAS, SE PREFERIR ATENDEMOS PLEO WHATSAPP</h2>

                
                <button className={styles.wpp}><FaWhatsapp /></button>

            </div>

            <div className={styles.right}>

                <h1 className={styles.h1}>Ficaremos felizes em realizar seu sonho!</h1>

                <button type='submit'  className={styles.orçament_button}>Fazer orçamento</button>
            </div>
        </form>

    </section>  
)
}export default Contact