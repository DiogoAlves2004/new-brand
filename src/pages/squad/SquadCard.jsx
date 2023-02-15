//STYLES
import styles from './styles/SquadCard.module.css'

function SquadCard(props){
return(

    <div className={styles.squad_card}>

    <div className={styles.squad_image}>
        <img src={props.image} />
    </div>

    <h1 className={styles.name}>{props.name}</h1>
    <h2 className={styles.title}>{props.title}</h2>


    </div>

)
}export default SquadCard