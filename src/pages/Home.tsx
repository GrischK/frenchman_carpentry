import styles from "../assets/css/Home.module.css";
import carpenter from "../assets/images/callum-hill-oamw52SCGi0-unsplash.jpg"

function Home() {

    return (
        <>
            <section className={styles.home_hero_section}>
                <div className={styles.home_title}>
                    <h1>Welcome to the Frenchman Carpentry workshop</h1>
                    <h2>My promise as an independent carpenter is to transform your vision into meticulously crafted
                        structures
                        that stand the test of time.
                    </h2>
                </div>
            </section>

        </>
    )
}

export default Home