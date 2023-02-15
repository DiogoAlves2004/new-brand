

//STYLES
import Navbar from '../../components/navbar/Navbar'
import styles from './styles/Portfolio.module.css'

//COMPONENTS
import ProjectCard from './ProjectCard'

//LIBS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//IMAGES

function Portfolio(){
    return(
        <section className={styles.portfolio}>

            <h1>Nossos projetos</h1>

            <Carousel showArrows={true}>
                <div>
                    <ProjectCard
                        image={'https://i2.wp.com/gatinhobranco.com/wp-content/uploads/2020/04/vitrine-do-bem-gatos-Photo-by-Stratman.jpg?fit=800%2C515'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'}
                        title={'Projeto1'}
                    />


                    <ProjectCard  
                        image={'https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif'}
                        text={'ola'}
                    />

                </div>
                <div>
                    <ProjectCard  
                        image={'https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif'}
                        text={'ola'}
                    />

                </div>

            </Carousel>
        </section>
    )
}export default Portfolio