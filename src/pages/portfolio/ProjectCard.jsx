//STYLES
import styles from './styles/ProjectCard.module.css'


//IMAGES
import Logo from '../../img/Logo.jpeg'

function ProjectCard(props){
return(

    <div className={styles.project_box}>
        
            <div className={styles.project_images}>
                <div className={styles.logo}>
                    <img src={Logo}/>
                </div>  

                <div className={styles.image}>
                    <img src={props.image}/>
                </div>
            </div>

            <div className={styles.project_text_box}>

                <h2>{props.title}</h2>

                <p>
                    {props.text}
                </p>

            </div>

    </div>

)
}export default ProjectCard