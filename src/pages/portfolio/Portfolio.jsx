

//STYLES
import styles from './styles/Portfolio.module.css'

//COMPONENTS
import ProjectCard from './ProjectCard'

//LIBS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Portfolio(){
    return(
        <section className={styles.portfolio} id='portfolio'>



            <h1 className={styles.portfolio_title}>Nossos projetos</h1>


            <Carousel interval={150} className={styles.carousel} showArrows={false}  emulateTouch={true}  showStatus={false} showThumbs={false}>
            
                <div>
                    <ProjectCard
                        image={'https://i2.wp.com/gatinhobranco.com/wp-content/uploads/2020/04/vitrine-do-bem-gatos-Photo-by-Stratman.jpg?fit=800%2C515'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'}
                        title={'Projeto1'}
                    />

                </div>

                <div>
                    <ProjectCard
                        image={'https://i2.wp.com/gatinhobranco.com/wp-content/uploads/2020/04/vitrine-do-bem-gatos-Photo-by-Stratman.jpg?fit=800%2C515'}
                        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'}
                        title={'Projeto1'}
                    />

                </div>

            </Carousel>
        </section>
    )
}export default Portfolio