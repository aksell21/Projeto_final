import styles from "../styles/BunkerCard.module.css"
export function BunkerCard({ data }) {
    return (
        <div>
            <div className={styles.upper}>
                <div className={styles.bunker}>
                    <img src={data.imagePath} />

                </div>
                <div className={styles.rightImages}>
                    <div className={styles.bunker1}>
                        <img className={styles.rightIMAGE} src={data.imagePath2} />
                    </div>
                    <div className={styles.bunker1}>
                        <img className={styles.rightIMAGE} src={data.imagePath3} />
                    </div>
                    <div className={styles.bunker1}>
                        <img className={styles.rightIMAGE} src={data.imagePath4} />
                    </div>
                    <div className={styles.bunker1}>
                        <img className={styles.rightIMAGE} src={data.imagePath5} />
                    </div>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.Dados}>
                    <h3 className={styles.Nomes}>{data.name}<sub><div className={styles.Preços}>{data.location.city}, {data.location.country}</div></sub></h3>


                    <div className={styles.intro}>{data.intro}</div>
                    <div className={styles.price}>{data.price} €</div>
                    <button className={styles.button} onClick={() => alert("Comprado com sucesso")}>Buy Now</button>
                    <h2>Protection Against</h2>
                    <img src={data.tagB} className={styles.icons} alt={"Olá"} />
                    <img src={data.tagE} className={styles.icons} />

                    <h2>Description</h2>
                    <div className={styles.description}>{data.description}</div>
                    <h2>Have any questions?</h2>
                    <div className={styles.description}>{data.help}</div>
                    <button onClick={() => alert("Contactado com sucesso")}>a.bunker@bunker.com</button>
                </div>
                <div className={styles.tags}>
                </div>
            </div>
        </div>

    )
}