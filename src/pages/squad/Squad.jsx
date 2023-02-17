

//STYLES

import SquadCard from './SquadCard'
import styles from './styles/Squad.module.css'
function Squad(){
    return(
        <section className={styles.squad} id="squad">

            <h1 className={styles.title}>Nosso squad</h1>

            <div className={styles.squad_box}>

                <SquadCard image='http://www.meupositivo.com.br/doseujeito/wp-content/uploads/2022/08/Como-remover-sua-foto-de-perfil-das-redes-sociais.jpg' name='Teste 1' title='Frontend Developer'  />

                <SquadCard image='http://www.meupositivo.com.br/doseujeito/wp-content/uploads/2022/08/Como-remover-sua-foto-de-perfil-das-redes-sociais.jpg' name='Teste 2' title='Backend Developer'  />


                <SquadCard image='http://www.meupositivo.com.br/doseujeito/wp-content/uploads/2022/08/Como-remover-sua-foto-de-perfil-das-redes-sociais.jpg' name='Teste 3' title='UI/UX Designer'  />
            </div>

        </section>
    )
}export default Squad