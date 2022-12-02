import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function Home() {
  return (
    <main>
      <section className={styles.collection}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.row}>
            <h1 className={styles.title}>Featured Collection</h1>
            <div className={styles.painting}>
                <img src='https://cdn.shopify.com/s/files/1/0684/1457/0804/collections/48f117ea-1b8a-4033-addd-c16e9a709b3d.png?v=1669230233' alt='painting'></img>
                <p className={styles.text}>Motivational Posters
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={styles.arrow} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                </p>
            </div>
            <div className={styles.hoodie}>
                <img src='https://cdn.shopify.com/s/files/1/0684/1457/0804/collections/image.png?v=1669218127&width=750' alt='hoody'></img>
                <p className={styles.text}>Winter Hoodie Collections
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  className={styles.arrow} viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </p>
            </div>
        </div>
      </div>
    </section>
    </main>
  )
}